# Firma de correo · Litoprocess

Plantilla HTML de 640 px de ancho, maquetada con tablas y estilos en línea
(el único formato que respetan Gmail, Outlook, Apple Mail y Thunderbird).

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `firma-litoprocess.html` | **La firma final.** Las imágenes apuntan a una URL pública. |
| `firma-preview.html` | Vista previa autocontenida (imágenes en base64). Ábrela en el navegador para revisarla o para copiar y pegar directo. |
| `img/` | Las 5 imágenes que hay que subir al servidor. |
| `_plantilla.src.html` | Fuente única con el marcador `__IMG__`. |
| `_build.py` | Genera los HTML con los datos de cada persona. Ver Paso 3. |

## Paso 1 · Subir las imágenes

Sube la carpeta `img/` a un lugar público y permanente, por ejemplo
`https://www.litoprocess.com/firma/img/`. Los correos ya enviados seguirán
pidiendo esas URLs durante años, así que no las muevas ni las renombres.

Si la ruta final es distinta, pásala con `--img-base` (ver Paso 3).

| Imagen | Tamaño real | Se muestra a |
|---|---|---|
| `lito-inferior.png` | 1280 × 171 | 640 × 86 (retina 2x) |
| `icon-mail.png` `icon-tel.png` `icon-mapa.png` `icon-web.png` | 56 × 56 | 14 × 14 |

## Paso 2 · Instalar la firma

- **Gmail / Google Workspace**: abre `firma-preview.html` en el navegador,
  selecciona la firma completa, cópiala y pégala en
  Configuración → General → Firma. Gmail no acepta pegar código HTML.
- **Outlook (escritorio)**: Archivo → Opciones → Correo → Firmas. Mismo
  procedimiento de copiar y pegar desde el navegador.
- **Apple Mail**: Ajustes → Firmas, pega y **desmarca**
  "Usar siempre el tipo de letra de mis mensajes".
- **Herramientas corporativas** (Exclaimer, CodeTwo, plantillas de Workspace):
  pega el contenido de `firma-litoprocess.html` tal cual.

## Paso 3 · Personalizar por persona

Nunca edites `_plantilla.src.html` para cambiar datos: es la maqueta base y
todos los campos se pasan por línea de comandos.

```bash
# Firma por defecto (Carlos Charabati)
python3 _build.py

# Otra persona
python3 _build.py \
  --nombre "Ana Robles" \
  --puesto "Gerente Comercial" \
  --correo ana@litoprocess.com \
  --ext 118 \
  --salida firma-ana
```

Genera `firma-ana.html` y `firma-ana-preview.html`. Sin `--salida` los archivos
se llaman `firma-litoprocess*.html` y se sobrescriben en cada corrida, así que
usa `--salida` cuando generes varias personas.

### Todos los parámetros

| Parámetro | Para qué | Por defecto |
|---|---|---|
| `--nombre` | Nombre completo. Se pasa a mayúsculas automáticamente | Carlos Charabati |
| `--puesto` | Cargo | Director |
| `--correo` | Texto visible **y** enlace `mailto:` | carlos@litoprocess.com |
| `--ext` | Extensión. Pasa `--ext ""` para omitirla | 106 |
| `--telefono` | Conmutador | (55) 2122 5600 |
| `--direccion1` / `--direccion2` | Las dos líneas de la dirección | Calz. San Francisco… |
| `--sitio` | Sitio web visible | www.litoprocess.com |
| `--img-base` | URL pública de la carpeta `img/` | https://www.litoprocess.com/firma/img/ |
| `--lada-pais` | Prefijo del enlace `tel:` | +52 |
| `--tel-href` | Enlace `tel:` exacto, si no quieres que se calcule | *(calculado)* |
| `--sitio-href` | URL destino, si difiere del texto visible | *(https:// + sitio)* |
| `--salida` | Nombre base de los archivos generados | firma-litoprocess |

`python3 _build.py --help` lista lo mismo desde la terminal.

### Lo que el script hace por ti

- **Enlace telefónico:** de `(55) 2122 5600` + `--ext 106` arma `tel:+525521225600,106`.
- **Acentos:** `José Peña` sale como `Jos&#233; Pe&#241;a`, que sobrevive a
  editores de firma que no respetan UTF-8.
- **Mayúsculas del nombre:** se aplican en el texto, no solo con CSS, porque
  Outlook de escritorio ignora `text-transform`.
- **Validación:** aborta si falta una imagen en `img/` o si queda algún
  marcador sin rellenar.

### Límite de ancho

La columna del nombre mide 262 px: entran unos 17 caracteres antes de saltar de
línea. Para nombres más largos, baja el `font-size:21px` de esa línea en
`_plantilla.src.html`.

## Detalles tomados del diseño original

- Fondo azul `#3f6daf`
- Barra inferior en cuatro tramos iguales:
  rojo `#ce4040`, morado `#89297c`, naranja `#e59535`, verde `#9cbe43`
- Tipografía monoespaciada: `'Roboto Mono', Menlo, Consolas, 'Courier New', monospace`.
  Los clientes de correo ignoran las fuentes web, así que cada sistema usa la
  monoespaciada que tenga instalada; el carácter del diseño se conserva.
