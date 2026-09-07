#!/usr/bin/env python3
"""
Genera la firma de correo de Litoprocess a partir de _plantilla.src.html.

Produce dos archivos por persona:
  <salida>.html          firma final, imagenes apuntando al servidor publico
  <salida>-preview.html  vista previa autocontenida (base64) para copiar y pegar

Ejemplos
--------
  # Firma por defecto (Carlos Charabati)
  python3 _build.py

  # Otra persona
  python3 _build.py --nombre "Ana Robles" --puesto "Gerente Comercial" \\
                    --correo ana@litoprocess.com --ext 118 --salida firma-ana

  # Cambiar el telefono base o la URL de las imagenes
  python3 _build.py --telefono "(55) 2122 5601" --img-base https://cdn.litoprocess.com/firma/
"""

import argparse
import base64
import pathlib
import re
import sys

RAIZ = pathlib.Path(__file__).resolve().parent
PLANTILLA = RAIZ / "_plantilla.src.html"
DIR_IMG = RAIZ / "img"
IMAGENES = [
    "icon-mail.png",
    "icon-tel.png",
    "icon-mapa.png",
    "icon-web.png",
    "lito-inferior.png",
]

# ---------------------------------------------------------------- valores por defecto
# Datos de la empresa: iguales para todos, rara vez cambian.
IMG_BASE = "https://www.litoprocess.com/firma/img/"
DIRECCION_1 = "Calz. San Francisco Cuautlalpan 102-A,"
DIRECCION_2 = "53569, Naucalpan Edo. de México"
SITIO = "www.litoprocess.com"
TELEFONO = "(55) 2122 5600"
LADA_PAIS = "+52"

# Datos de la persona: lo que cambia en cada firma.
NOMBRE = "Carlos Charabati"
PUESTO = "Director"
CORREO = "carlos@litoprocess.com"
EXTENSION = "106"


def texto_html(valor):
    """Escapa el texto para HTML y convierte acentos en entidades numericas.

    Las entidades evitan que se rompan los acentos al pegar la firma en
    editores que no respetan la codificacion UTF-8 (Outlook, sobre todo).
    """
    valor = (
        str(valor)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )
    return valor.encode("ascii", "xmlcharrefreplace").decode("ascii")


def tel_a_href(telefono, extension, lada_pais):
    """Convierte "(55) 2122 5600" + "106" en "+525521225600,106"."""
    digitos = re.sub(r"\D", "", telefono)
    href = lada_pais + digitos if not telefono.strip().startswith("+") else "+" + digitos
    if extension:
        href += "," + re.sub(r"\D", "", str(extension))
    return href


def construir_campos(args):
    """Arma el diccionario de reemplazos a partir de los argumentos."""
    telefono_visible = args.telefono
    if args.extension:
        telefono_visible += f" ext. {args.extension}"

    tel_href = args.tel_href or tel_a_href(args.telefono, args.extension, args.lada_pais)
    sitio_href = args.sitio_href or "https://" + args.sitio.lstrip("/")

    # El nombre va en mayusculas desde aqui y no solo con text-transform en CSS:
    # el motor de Word que usa Outlook de escritorio ignora esa propiedad.
    return {
        "NOMBRE": texto_html(args.nombre.upper()),
        "PUESTO": texto_html(args.puesto),
        "CORREO": texto_html(args.correo),
        "TELEFONO": texto_html(telefono_visible),
        "TEL_HREF": texto_html(tel_href),
        "DIRECCION_1": texto_html(args.direccion1),
        "DIRECCION_2": texto_html(args.direccion2),
        "SITIO": texto_html(args.sitio),
        "SITIO_HREF": texto_html(sitio_href),
    }


def rellenar(plantilla, campos):
    for clave, valor in campos.items():
        plantilla = plantilla.replace("{{" + clave + "}}", valor)
    return plantilla


def envolver_preview(firma):
    return f"""<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Firma Litoprocess</title>
<style>body{{margin:0;padding:32px;background:#eef1f5;font-family:-apple-system,system-ui,sans-serif}}
.hint{{max-width:640px;margin:0 auto 16px;font-size:13px;line-height:1.5;color:#4a5568}}
.wrap{{width:640px;margin:0 auto;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,.12)}}</style>
</head><body>
<p class="hint">Selecciona toda la firma (clic justo antes del nombre y arrastra hasta el final de la imagen), c&oacute;piala y p&eacute;gala en la configuraci&oacute;n de firma de tu cliente de correo.</p>
<div class="wrap">
{firma}
</div>
</body></html>"""


def leer_argumentos(argv):
    p = argparse.ArgumentParser(
        description="Genera la firma de correo de Litoprocess.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__.split("Ejemplos")[-1],
    )

    persona = p.add_argument_group("datos de la persona")
    persona.add_argument("--nombre", default=NOMBRE,
                         help=f"nombre completo, se muestra en mayusculas (por defecto: {NOMBRE})")
    persona.add_argument("--puesto", default=PUESTO,
                         help=f"cargo (por defecto: {PUESTO})")
    persona.add_argument("--correo", default=CORREO,
                         help=f"correo, se usa como texto y como enlace mailto: (por defecto: {CORREO})")
    persona.add_argument("--ext", "--extension", dest="extension", default=EXTENSION,
                         help=f"extension telefonica, vacio para omitirla (por defecto: {EXTENSION})")

    empresa = p.add_argument_group("datos de la empresa")
    empresa.add_argument("--telefono", default=TELEFONO,
                         help=f"conmutador (por defecto: {TELEFONO})")
    empresa.add_argument("--direccion1", default=DIRECCION_1,
                         help="primera linea de la direccion")
    empresa.add_argument("--direccion2", default=DIRECCION_2,
                         help="segunda linea de la direccion")
    empresa.add_argument("--sitio", default=SITIO,
                         help=f"sitio web visible (por defecto: {SITIO})")

    avanzado = p.add_argument_group("opciones avanzadas")
    avanzado.add_argument("--lada-pais", dest="lada_pais", default=LADA_PAIS,
                          help=f"prefijo para el enlace tel: (por defecto: {LADA_PAIS})")
    avanzado.add_argument("--tel-href", dest="tel_href", default=None,
                          help="enlace tel: exacto, si no quieres que se calcule solo")
    avanzado.add_argument("--sitio-href", dest="sitio_href", default=None,
                          help="URL de destino del sitio, si difiere del texto visible")
    avanzado.add_argument("--img-base", dest="img_base", default=IMG_BASE,
                          help=f"URL publica de la carpeta img/ (por defecto: {IMG_BASE})")
    avanzado.add_argument("--salida", default="firma-litoprocess",
                          help="nombre base de los archivos generados (por defecto: firma-litoprocess)")

    return p.parse_args(argv)


def main(argv=None):
    args = leer_argumentos(argv)

    if not PLANTILLA.exists():
        sys.exit(f"error: falta la plantilla {PLANTILLA.name}")
    faltantes = [n for n in IMAGENES if not (DIR_IMG / n).exists()]
    if faltantes:
        sys.exit(f"error: faltan imagenes en img/: {', '.join(faltantes)}")

    plantilla = PLANTILLA.read_text(encoding="utf-8")
    firma = rellenar(plantilla, construir_campos(args))

    # Version de produccion: las imagenes viven en el servidor publico.
    base = args.img_base if args.img_base.endswith("/") else args.img_base + "/"
    remota = firma.replace("{{IMG}}", base)

    # Version de vista previa: las imagenes van incrustadas en base64.
    preview = firma
    for nombre in IMAGENES:
        datos = base64.b64encode((DIR_IMG / nombre).read_bytes()).decode("ascii")
        preview = preview.replace("{{IMG}}" + nombre, "data:image/png;base64," + datos)

    pendientes = sorted(set(re.findall(r"\{\{[A-Z_0-9]+\}\}", remota)))
    if pendientes:
        sys.exit(f"error: la plantilla dejo marcadores sin rellenar: {', '.join(pendientes)}")

    archivo_html = RAIZ / f"{args.salida}.html"
    archivo_preview = RAIZ / f"{args.salida}-preview.html"
    archivo_html.write_text(remota, encoding="utf-8")
    archivo_preview.write_text(envolver_preview(preview), encoding="utf-8")

    telefono = args.telefono + (f" ext. {args.extension}" if args.extension else "")
    print(f"{args.nombre} — {args.puesto}")
    print(f"  {args.correo} · {telefono}")
    print(f"  imagenes: {base}")
    print(f"  generado: {archivo_html.name}  +  {archivo_preview.name}")


if __name__ == "__main__":
    main()
