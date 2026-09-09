# Firma de correo · Litoprocess

Plantilla HTML de 700 px de ancho, maquetada con tablas y estilos en línea
(el único formato que respetan Gmail, Outlook, Apple Mail y Thunderbird).

Todo corre en el navegador — sin Python, sin Node, sin servidor. Abre
`generador.html` con doble clic y genera la firma ahí mismo.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `generador.html` | **La herramienta.** Ábrela con doble clic: escribe los datos de la persona, ve el preview y copia. |
| `generador.js` | Lógica de generación (equivalente al viejo `_build.py`, ahora en JS de navegador). También aquí viven los datos fijos de empresa (`EMPRESA`). |
| `plantilla.js` | El diseño de la firma (tabla HTML con marcadores `{{NOMBRE}}`, etc.). Editar aquí para cambios de layout/color. |
| `img-data.js` | Las 5 imágenes ya convertidas a base64, para que la firma copiada funcione sin depender de ningún servidor. |
| `img/` | Las imágenes originales — fuente de `img-data.js` y las que hay que subir al servidor público. |

## Paso 1 · Generar y copiar una firma

1. Abre `generador.html` en el navegador (doble clic al archivo).
2. Llena Nombre, Puesto, Correo y Extensión. Los datos de empresa (teléfono,
   dirección, sitio) son fijos — salen de `EMPRESA` en `generador.js`, no se
   editan por persona.
3. Revisa el preview.
4. Botón **"Copiar firma (para pegar)"** — copia la firma lista, con las
   imágenes apuntando a `https://litoprocess.com/mailer/assets/img/`.

   > **Nota:** las imágenes se referencian por URL, no en base64. Apple Mail
   > convierte las imágenes en base64 pegadas en Ajustes → Firmas en archivos
   > adjuntos en vez de mostrarlas en línea — por eso el modo URL es el que
   > hay que usar. Esto requiere que las 5 imágenes de `img/` estén subidas a
   > esa ruta pública antes de repartir la firma.

Si el copiado automático falla (navegador viejo o permisos bloqueados), el
mensaje de estado te avisa: selecciona el preview a mano y copia con
Ctrl/Cmd+C.

## Paso 2 · Instalar la firma copiada

- **Gmail / Google Workspace**: Configuración → General → Firma → pega.
- **Outlook (escritorio)**: Archivo → Opciones → Correo → Firmas → pega.
- **Apple Mail**: Ajustes → Firmas, pega y **desmarca**
  "Usar siempre el tipo de letra de mis mensajes".

## Paso 3 · Cambiar datos de empresa

No hay archivo de datos por persona: cada firma se escribe directo en el
formulario. Lo único fijo es la empresa, en la constante `EMPRESA` al inicio
de `generador.js`:

```js
const EMPRESA = {
  telefono: "(55) 2122 5600",
  direccion1: "Calz. San Francisco Cuautlalpan 102-A,",
  direccion2: "53569, Naucalpan Edo. de México",
  sitio: "www.litoprocess.com",
  lada_pais: "+52",
  img_base: "https://litoprocess.com/mailer/assets/img/",
};
```

Si cambia el teléfono, dirección o sitio de la empresa, edita esto una vez y
aplica a todas las firmas que generes después.

### Si cambias una imagen

Las imágenes de la firma NO se incrustan en base64 — se cargan por URL desde
`img_base` (`https://litoprocess.com/mailer/assets/img/`). Si reemplazas
alguna imagen, sube el archivo nuevo a esa ruta pública con el mismo nombre
(`icon-mail.png`, `icon-tel.png`, `icon-mapa.png`, `icon-web.png`,
`lito-inferior.png`) — el `img/` de este repo es solo la fuente/respaldo, no
lo que carga la firma. `img-data.js` quedó sin uso (era el respaldo en
base64 del modo autocontenido, que Apple Mail no soporta bien en firmas).

### Lo que el generador hace por ti

- **Enlace telefónico:** de `(55) 2122 5600` + ext. `106` arma `tel:+525521225600,106`.
- **Acentos:** `José Peña` sale como `Jos&#233; Pe&#241;a`, que sobrevive a
  editores de firma que no respetan UTF-8.
- **Mayúsculas del nombre:** se aplican en el texto, no solo con CSS, porque
  Outlook de escritorio ignora `text-transform`.

### Límite de ancho

La columna del nombre mide 317 px: entran unos 17 caracteres antes de saltar
de línea. Para nombres más largos, baja el `font-size:24px` de esa línea en
`plantilla.js`.

## Diseño minimalista (sin bloque azul)

Fondo blanco en toda la firma, sin bloques de color grandes — esto evita que
el modo oscuro de Outlook/Apple Mail reinterprete un fondo de color y vuelva
el texto ilegible. El único acento de color es la barra de 4 tramos al fondo.

Colores de texto sobre blanco:

| Elemento | Color |
|---|---|
| Nombre | `#1f3b64` (azul marino, bold) |
| Puesto | `#6b7684` (gris) |
| Correo / teléfono / dirección / sitio | `#33475b` (gris azulado oscuro) |

Los iconos (`icon-mail.png`, etc.) son glifo sólido `#33475b` sobre fondo
transparente, a juego con el texto de contacto — sin insignia de fondo azul.

Todos los colores de texto llevan `!important` como refuerzo adicional contra
reinterpretación de clientes de correo. No hay garantía 100%: el modo oscuro
de Outlook para Mac en particular reinterpreta a nivel de aplicación, no solo
CSS, y no hay meta-tag que lo bloquee en una firma pegada sin `<head>` propio.

## Detalles tomados del diseño original

- Barra inferior en cuatro tramos iguales:
  rojo `#ce4040`, morado `#89297c`, naranja `#e59535`, verde `#9cbe43`
- Tipografía monoespaciada: `'Source Code Pro', Menlo, Consolas, 'Courier New', monospace`.
  Los clientes de correo ignoran las fuentes web, así que cada sistema usa la
  monoespaciada que tenga instalada; el carácter del diseño se conserva.
