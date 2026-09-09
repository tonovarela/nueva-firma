// FIRMA DE CORREO ELECTRONICO · LITOPROCESS
// Ancho fijo 700 px. Maquetada con tablas y estilos en linea para
// Gmail, Outlook (Win/Mac/Web), Apple Mail, Thunderbird y Superhuman.
//
// Este es el diseño base. Para cambios de layout/colores edita el HTML
// de abajo (los marcadores {{DOBLE_LLAVE}} y {{IMG}} los rellena generador.js).
// Se carga con <script src="plantilla.js"> para que generador.html funcione
// abriendolo directo desde el disco, sin servidor.
const PLANTILLA = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="700" bgcolor="#ffffff"
       style="width:700px;border-collapse:collapse;background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;">
  <tr>

    <!-- BLOQUE PRINCIPAL: fondo blanco -->
    <td bgcolor="#ffffff" style="background-color:#ffffff !important;padding:22px 22px 22px 22px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="656" bgcolor="#ffffff" style="width:656px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>

          <!-- Columna izquierda: nombre y puesto -->
          <td width="317" valign="top" bgcolor="#ffffff" style="width:317px;padding:0;background-color:#ffffff !important;">
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:24px;line-height:30px;mso-line-height-rule:exactly;font-weight:bold;letter-spacing:1px;color:#1f3b64 !important;text-transform:uppercase;">{{NOMBRE}}</div>
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:18px;line-height:24px;mso-line-height-rule:exactly;font-weight:normal;letter-spacing:0.5px;color:#6b7684 !important;">{{PUESTO}}</div>
          </td>

          <!-- Columna derecha: datos de contacto -->
          <td width="341" valign="top" bgcolor="#ffffff" style="width:341px;padding:0;background-color:#ffffff !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="341" bgcolor="#ffffff" style="width:341px;border-collapse:collapse;background-color:#ffffff !important;">

              <!-- Correo -->
              <tr>
                <td width="24" valign="middle" bgcolor="#ffffff" style="width:24px;padding:0 11px 7px 0;">
                  <img src="{{IMG}}icon-mail.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;">
                </td>
                <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;padding:0 0 6px 0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:14px;line-height:20px;mso-line-height-rule:exactly;color:#33475b !important;">
                  <a href="mailto:{{CORREO}}" style="color:#33475b !important;text-decoration:none;">{{CORREO}}</a>
                </td>
              </tr>

              <!-- Telefono -->
              <tr>
                <td width="24" valign="middle" bgcolor="#ffffff" style="width:24px;padding:0 11px 7px 0;">
                  <img src="{{IMG}}icon-tel.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;">
                </td>
                <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;padding:0 0 6px 0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:14px;line-height:20px;mso-line-height-rule:exactly;color:#33475b !important;">
                  <a href="tel:{{TEL_HREF}}" style="color:#33475b !important;text-decoration:none;">{{TELEFONO}}</a>
                </td>
              </tr>

              <!-- Direccion -->
              <tr>
                <td width="24" valign="top" bgcolor="#ffffff" style="width:24px;padding:1px 11px 7px 0;">
                  <img src="{{IMG}}icon-mapa.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;">
                </td>
                <td valign="top" bgcolor="#ffffff" style="background-color:#ffffff !important;padding:0 0 6px 0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:14px;line-height:20px;mso-line-height-rule:exactly;color:#33475b !important;">
                  {{DIRECCION_1}}<br>{{DIRECCION_2}}
                </td>
              </tr>

              <!-- Sitio web -->
              <tr>
                <td width="24" valign="middle" bgcolor="#ffffff" style="width:24px;padding:0;">
                  <img src="{{IMG}}icon-web.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;">
                </td>
                <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;padding:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:14px;line-height:20px;mso-line-height-rule:exactly;color:#33475b !important;">
                  <a href="{{SITIO_HREF}}" style="color:#33475b !important;text-decoration:none;">{{SITIO}}</a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- BARRA DE CUATRO COLORES -->
  <tr>
    <td bgcolor="#ffffff" style="background-color:#ffffff !important;padding:0;font-size:0;line-height:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="700" bgcolor="#ffffff" style="width:700px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>
          <td width="175" height="2" bgcolor="#ce4040" style="width:175px;height:2px;background-color:#ce4040;font-size:0;line-height:0;">&nbsp;</td>
          <td width="175" height="2" bgcolor="#89297c" style="width:175px;height:2px;background-color:#89297c;font-size:0;line-height:0;">&nbsp;</td>
          <td width="175" height="2" bgcolor="#e59535" style="width:175px;height:2px;background-color:#e59535;font-size:0;line-height:0;">&nbsp;</td>
          <td width="175" height="2" bgcolor="#9cbe43" style="width:175px;height:2px;background-color:#9cbe43;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- BLOQUE BLANCO: logotipo, certificaciones y slogan -->
  <tr>
    <td bgcolor="#ffffff" style="padding:0;font-size:0;line-height:0;background-color:#ffffff !important;">
      <a href="{{SITIO_HREF}}" style="text-decoration:none;"><img src="{{IMG}}lito-inferior.png" width="700" height="94" alt="Litoprocess - impresos + soluciones | Te llevaras una gran impresion | Empaque, Display, POP, Impresion Comercial" style="display:block;width:700px;height:94px;border:0;outline:none;"></a>
    </td>
  </tr>
</table>`;
