// Logica de generacion de la firma. Puerto 1:1 de lo que antes hacia _build.py,
// ahora corriendo en el navegador (sin backend, sin build step).

// Datos de empresa: iguales para todos, raramente cambian. Editar aqui si cambian.
const EMPRESA = {
  telefono: "(55) 2122 5600",
  direccion1: "Calz. San Francisco Cuautlalpan 102‑A, C.P. 53569",
  direccion2: "Naucalpan Edo. de México",
  sitio: "www.litoprocess.com",
  lada_pais: "+52",
  img_base: "https://litoprocess.com/mailer/assets/img/",
};

/** Escapa el texto para HTML y convierte no-ascii en entidades numericas.
 * Las entidades evitan que se rompan los acentos al pegar la firma en
 * editores que no respetan la codificacion UTF-8 (Outlook, sobre todo). */
function textoHtml(valor) {
  const escapado = String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  return Array.from(escapado)
    .map((ch) => {
      const code = ch.codePointAt(0);
      return code > 127 ? `&#${code};` : ch;
    })
    .join("");
}

/** Convierte "(55) 2122 5600" + "106" en "+525521225600,106". */
function telAHref(telefono, extension, ladaPais) {
  const digitos = telefono.replace(/\D/g, "");
  const href = telefono.trim().startsWith("+") ? "+" + digitos : ladaPais + digitos;
  const ext = String(extension || "").replace(/\D/g, "");
  return ext ? `${href},${ext}` : href;
}

/** Arma el diccionario de reemplazos {{MARCADOR}} a partir de los datos resueltos. */
function construirCampos(datos) {
  const telefonoVisible = datos.ext ? `${datos.telefono} ext. ${datos.ext}` : datos.telefono;
  const telHref = telAHref(datos.telefono, datos.ext, datos.lada_pais);
  const sitioHref = "https://" + datos.sitio.replace(/^\/+/, "");

  // El nombre va en mayusculas desde aqui y no solo con text-transform en CSS:
  // el motor de Word que usa Outlook de escritorio ignora esa propiedad.
  return {
    NOMBRE: textoHtml(datos.nombre.toUpperCase()),
    PUESTO: textoHtml(datos.puesto),
    CORREO: textoHtml(datos.correo),
    TELEFONO: textoHtml(telefonoVisible),
    TEL_HREF: textoHtml(telHref),
    DIRECCION_1: textoHtml(datos.direccion1),
    DIRECCION_2: textoHtml(datos.direccion2),
    SITIO: textoHtml(datos.sitio),
    SITIO_HREF: textoHtml(sitioHref),
  };
}

function rellenar(plantilla, campos) {
  let resultado = plantilla;
  for (const [clave, valor] of Object.entries(campos)) {
    resultado = resultado.split(`{{${clave}}}`).join(valor);
  }
  return resultado;
}

/** Reemplaza {{IMG}}archivo.png usando el resolvedor dado (base64 o URL publica). */
function resolverImagenes(html, resolverImg) {
  return html.replace(/\{\{IMG\}\}([\w.-]+)/g, (_, archivo) => resolverImg(archivo));
}

/** Disenos disponibles: cada uno referencia la plantilla de plantilla.js. */
const DISENOS = {
  clasico: PLANTILLA,
  megafono: PLANTILLA_SEGUNDA,
  azul: PLANTILLA_TERCERA,
  verde: PLANTILLA_CUARTA,
};

/** Genera el HTML final de la firma.
 * modo "base64": imagenes incrustadas, autocontenido, listo para copiar y pegar.
 * modo "url": imagenes apuntando a datos.img_base, para herramientas corporativas. */
function generarFirma(datos, modo, diseno) {
  const campos = construirCampos(datos);
  const plantilla = DISENOS[diseno] || PLANTILLA;
  let html = rellenar(plantilla, campos);
  if (modo === "base64") {
    html = resolverImagenes(html, (archivo) => IMG_DATA[archivo] || "");
  } else {
    const base = datos.img_base.endsWith("/") ? datos.img_base : datos.img_base + "/";
    html = resolverImagenes(html, (archivo) => base + archivo);
  }
  return html;
}

// ---------------------------------------------------------------- UI

const els = {
  nombre: document.getElementById("campo-nombre"),
  puesto: document.getElementById("campo-puesto"),
  correo: document.getElementById("campo-correo"),
  ext: document.getElementById("campo-ext"),
  preview: document.getElementById("preview-frame"),
  estado: document.getElementById("estado"),
  btnCopiar: document.getElementById("btn-copiar"),
};

function leerDatosDeFormulario() {
  return Object.assign({}, EMPRESA, {
    nombre: els.nombre.value.trim(),
    puesto: els.puesto.value.trim(),
    correo: els.correo.value.trim(),
    ext: els.ext.value.trim(),
  });
}

function leerDisenoSeleccionado() {
  const radio = document.querySelector('input[name="diseno"]:checked');
  return radio ? radio.value : "clasico";
}

/** Ajusta ancho y alto del iframe al contenido real (tamaño de la plantilla
 * activa), para que el preview nunca recorte la firma ni deje espacio de más. */
function ajustarTamanoPreview() {
  const doc = els.preview.contentDocument;
  if (!doc || !doc.body) return;
  els.preview.style.width = doc.body.scrollWidth + "px";
  els.preview.style.height = doc.body.scrollHeight + "px";
}

function actualizarPreview() {
  const datos = leerDatosDeFormulario();
  if (!datos.nombre || !datos.correo) {
    els.preview.srcdoc = "<p style='font-family:sans-serif;color:#888;padding:16px'>Falta nombre o correo.</p>";
    els.preview.onload = ajustarTamanoPreview;
    return;
  }
  const html = generarFirma(datos, "url", leerDisenoSeleccionado());
  els.preview.srcdoc = `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:16px;background:#fff">${html}</body></html>`;
  els.preview.onload = ajustarTamanoPreview;
}

function mostrarEstado(mensaje, esError) {
  els.estado.textContent = mensaje;
  els.estado.style.color = esError ? "#b3261e" : "#2f6b3a";
  clearTimeout(mostrarEstado._t);
  mostrarEstado._t = setTimeout(() => {
    els.estado.textContent = "";
  }, 4000);
}

/** Copia HTML "rico" (con imagenes incrustadas) usando la seleccion del DOM +
 * execCommand, que funciona incluso abriendo el archivo con doble clic
 * (file://), a diferencia de navigator.clipboard, que exige contexto seguro. */
function copiarComoRico(html) {
  const contenedor = document.createElement("div");
  contenedor.contentEditable = "true";
  contenedor.style.position = "fixed";
  contenedor.style.left = "-9999px";
  contenedor.innerHTML = html;
  document.body.appendChild(contenedor);

  const rango = document.createRange();
  rango.selectNodeContents(contenedor);
  const seleccion = window.getSelection();
  seleccion.removeAllRanges();
  seleccion.addRange(rango);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }

  seleccion.removeAllRanges();
  document.body.removeChild(contenedor);
  return ok;
}

function alCopiarFirma() {
  const datos = leerDatosDeFormulario();
  if (!datos.nombre || !datos.correo) {
    mostrarEstado("Falta nombre o correo.", true);
    return;
  }
  const html = generarFirma(datos, "url", leerDisenoSeleccionado());
  const ok = copiarComoRico(html);
  mostrarEstado(
    ok
      ? "Firma copiada — pégala en Configuración → Firma de tu correo."
      : "No se pudo copiar automático. Selecciona el preview y usa Ctrl/Cmd+C.",
    !ok
  );
}

function iniciar() {
  actualizarPreview();

  for (const campo of ["nombre", "puesto", "correo", "ext"]) {
    els[campo].addEventListener("input", actualizarPreview);
  }

  for (const radio of document.querySelectorAll('input[name="diseno"]')) {
    radio.addEventListener("change", actualizarPreview);
  }

  els.btnCopiar.addEventListener("click", alCopiarFirma);
}

document.addEventListener("DOMContentLoaded", iniciar);
