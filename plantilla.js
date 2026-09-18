// FIRMA DE CORREO ELECTRONICO · LITOPROCESS
// Ancho fijo 780 px. Maquetada con tablas y estilos en linea para
// Gmail, Outlook (Win/Mac/Web), Apple Mail, Thunderbird y Superhuman.
//
// Este es el diseño base. Para cambios de layout/colores edita el HTML
// de abajo (los marcadores {{DOBLE_LLAVE}} y {{IMG}} los rellena generador.js).
// Se carga con <script src="plantilla.js"> para que generador.html funcione
// abriendolo directo desde el disco, sin servidor.
const PLANTILLA = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="780" bgcolor="#ffffff"
       style="width:780px;border-collapse:collapse;background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;">
  <tr>

    <!-- BLOQUE PRINCIPAL: fondo blanco -->
    <td bgcolor="#ffffff" style="background-color:#ffffff !important;padding:22px 22px 22px 22px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="736" bgcolor="#ffffff" style="width:736px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>

          <!-- Columna izquierda: nombre y puesto -->
          <td width="356" valign="top" bgcolor="#ffffff" style="width:356px;padding:0;background-color:#ffffff !important;">
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:24px;line-height:30px;mso-line-height-rule:exactly;font-weight:bold;letter-spacing:1px;color:#1f3b64 !important;text-transform:uppercase;">{{NOMBRE}}</div>
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:18px;line-height:24px;mso-line-height-rule:exactly;font-weight:normal;letter-spacing:0.5px;color:#6b7684 !important;">{{PUESTO}}</div>
          </td>

          <!-- Columna derecha: datos de contacto -->
          <td width="380" valign="top" bgcolor="#ffffff" style="width:380px;padding:0;background-color:#ffffff !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="380" bgcolor="#ffffff" style="width:380px;border-collapse:collapse;background-color:#ffffff !important;">

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
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="780" bgcolor="#ffffff" style="width:780px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>
          <td width="195" height="2" bgcolor="#ce4040" style="width:195px;height:2px;background-color:#ce4040;font-size:0;line-height:0;">&nbsp;</td>
          <td width="195" height="2" bgcolor="#89297c" style="width:195px;height:2px;background-color:#89297c;font-size:0;line-height:0;">&nbsp;</td>
          <td width="195" height="2" bgcolor="#e59535" style="width:195px;height:2px;background-color:#e59535;font-size:0;line-height:0;">&nbsp;</td>
          <td width="195" height="2" bgcolor="#9cbe43" style="width:195px;height:2px;background-color:#9cbe43;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- BLOQUE BLANCO: logotipo+certificaciones (izquierda) y slogan+mano (derecha),
       cada uno anclado a su esquina; el espacio de en medio crece con el ancho. -->
  <tr>
    <td bgcolor="#ffffff" style="padding:0;font-size:0;line-height:0;background-color:#ffffff !important;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="780" bgcolor="#ffffff" style="width:780px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>
          <td width="266" valign="bottom" align="left" bgcolor="#ffffff" style="width:266px;padding:0;background-color:#ffffff !important;">
            <a href="{{SITIO_HREF}}" style="text-decoration:none;"><img src="{{IMG}}lito-pie-izquierda.png" width="266" height="85" alt="Litoprocess - impresos + soluciones" style="display:block;width:266px;height:85px;border:0;outline:none;"></a>
          </td>
          <td width="514" valign="bottom" align="right" bgcolor="#ffffff" style="width:514px;padding:0;background-color:#ffffff !important;">
            <a href="{{SITIO_HREF}}" style="text-decoration:none;"><img src="{{IMG}}lito-pie-derecha.png" width="317" height="79" alt="Te llevaras una gran impresion | Empaque, Display, POP, Impresion Comercial" style="display:block;width:317px;height:79px;border:0;outline:none;"></a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

// ---------------------------------------------------------------------------
// DISENO 2 "MEGAFONO" — basado en references/segunda.jpeg
// Foto del megafono a la izquierda; a la derecha nombre/puesto, logotipo de
// color, barra de cuatro colores, etiqueta "Te llevaras..." y contacto.
// Logo y certificaciones al pie, dentro de la misma columna derecha.
const PLANTILLA_SEGUNDA = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="780" bgcolor="#ffffff"
       style="width:780px;border-collapse:collapse;background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;">
  <tr>
    <td bgcolor="#ffffff" style="background-color:#ffffff !important;padding:22px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="736" bgcolor="#ffffff" style="width:736px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>

          <!-- Foto del megafono -->
          <td width="150" valign="top" bgcolor="#ffffff" style="width:150px;padding:0 16px 0 0;background-color:#ffffff !important;">
            <img src="{{IMG}}hombre-megafono.png" width="150" height="281" alt="" style="display:block;width:150px;height:281px;border:0;outline:none;">
          </td>

          <!-- Columna derecha -->
          <td width="570" valign="top" bgcolor="#ffffff" style="width:570px;padding:0;background-color:#ffffff !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="570" bgcolor="#ffffff" style="width:570px;border-collapse:collapse;background-color:#ffffff !important;">

              <!-- Nombre / puesto + logotipo de color -->
              <tr>
                <td width="420" valign="top" bgcolor="#ffffff" style="width:420px;padding:0;background-color:#ffffff !important;">
                  <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:22px;line-height:27px;mso-line-height-rule:exactly;font-weight:bold;letter-spacing:0.5px;color:#1f3b64 !important;text-transform:uppercase;white-space:nowrap;">{{NOMBRE}}</div>
                  <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:18px;line-height:23px;mso-line-height-rule:exactly;font-weight:normal;letter-spacing:0.5px;color:#d5602f !important;">{{PUESTO}}</div>
                </td>
                <td width="150" valign="top" align="right" bgcolor="#ffffff" style="width:150px;padding:0;background-color:#ffffff !important;">
                  <img src="{{IMG}}texto-color-vertical.png" width="130" height="88" alt="Empaque, Display, POP, Impresion Comercial" style="display:block;width:130px;height:88px;border:0;outline:none;">
                </td>
              </tr>

              <!-- Barra de cuatro colores -->
              <tr>
                <td colspan="2" bgcolor="#ffffff" style="padding:10px 0 0 0;font-size:0;line-height:0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="570" bgcolor="#ffffff" style="width:570px;border-collapse:collapse;background-color:#ffffff !important;">
                    <tr>
                      <td width="143" height="2" bgcolor="#ce4040" style="width:143px;height:2px;background-color:#ce4040;font-size:0;line-height:0;">&nbsp;</td>
                      <td width="142" height="2" bgcolor="#89297c" style="width:142px;height:2px;background-color:#89297c;font-size:0;line-height:0;">&nbsp;</td>
                      <td width="143" height="2" bgcolor="#e59535" style="width:143px;height:2px;background-color:#e59535;font-size:0;line-height:0;">&nbsp;</td>
                      <td width="142" height="2" bgcolor="#9cbe43" style="width:142px;height:2px;background-color:#9cbe43;font-size:0;line-height:0;">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Etiqueta "Te llevaras una gran impresion" -->
              <tr>
                <td colspan="2" align="right" bgcolor="#ffffff" style="padding:0 0 12px 0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#1f3b64" style="border-collapse:collapse;background-color:#1f3b64 !important;">
                    <tr>
                      <td style="padding:6px 14px;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:12px;line-height:16px;mso-line-height-rule:exactly;font-weight:bold;color:#ffffff !important;white-space:nowrap;">Te llevar&aacute;s una gran impresi&oacute;n</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Correo / direccion -->
              <tr>
                <td width="285" valign="top" bgcolor="#ffffff" style="width:285px;padding:0 0 8px 0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="285" bgcolor="#ffffff" style="width:285px;border-collapse:collapse;background-color:#ffffff !important;">
                    <tr>
                      <td width="22" valign="middle" bgcolor="#ffffff" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-mail.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                      <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:13px;line-height:18px;mso-line-height-rule:exactly;color:#2a3b5c !important;word-break:break-all;overflow-wrap:break-word;"><a href="mailto:{{CORREO}}" style="color:#2a3b5c !important;text-decoration:none;">{{CORREO}}</a></td>
                    </tr>
                  </table>
                </td>
                <td width="285" valign="top" bgcolor="#ffffff" style="width:285px;padding:0 0 8px 0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="285" bgcolor="#ffffff" style="width:285px;border-collapse:collapse;background-color:#ffffff !important;">
                    <tr>
                      <td width="22" valign="top" bgcolor="#ffffff" style="width:22px;padding:1px 8px 0 0;"><img src="{{IMG}}icon-mapa.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                      <td valign="top" bgcolor="#ffffff" style="background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:13px;line-height:18px;mso-line-height-rule:exactly;color:#2a3b5c !important;">{{DIRECCION_1}}<br>{{DIRECCION_2}}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Telefono / sitio -->
              <tr>
                <td width="285" valign="top" bgcolor="#ffffff" style="width:285px;padding:0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="285" bgcolor="#ffffff" style="width:285px;border-collapse:collapse;background-color:#ffffff !important;">
                    <tr>
                      <td width="22" valign="middle" bgcolor="#ffffff" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-tel.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                      <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:13px;line-height:18px;mso-line-height-rule:exactly;color:#2a3b5c !important;word-break:break-all;overflow-wrap:break-word;"><a href="tel:{{TEL_HREF}}" style="color:#2a3b5c !important;text-decoration:none;">{{TELEFONO}}</a></td>
                    </tr>
                  </table>
                </td>
                <td width="285" valign="top" bgcolor="#ffffff" style="width:285px;padding:0;background-color:#ffffff !important;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="285" bgcolor="#ffffff" style="width:285px;border-collapse:collapse;background-color:#ffffff !important;">
                    <tr>
                      <td width="22" valign="middle" bgcolor="#ffffff" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-web.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                      <td valign="middle" bgcolor="#ffffff" style="background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:13px;line-height:18px;mso-line-height-rule:exactly;color:#2a3b5c !important;word-break:break-all;overflow-wrap:break-word;"><a href="{{SITIO_HREF}}" style="color:#2a3b5c !important;text-decoration:none;">{{SITIO}}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Espaciador -->
              <tr><td colspan="2" bgcolor="#ffffff" style="padding:0 0 18px 0;font-size:0;line-height:0;background-color:#ffffff !important;">&nbsp;</td></tr>

              <!-- Logotipo y certificaciones -->
              <tr>
                <td width="285" valign="middle" bgcolor="#ffffff" style="width:285px;padding:0;background-color:#ffffff !important;">
                  <img src="{{IMG}}logo-litoprocess.png" width="190" height="40" alt="Litoprocess - impresos + soluciones" style="display:block;width:190px;height:40px;border:0;outline:none;">
                </td>
                <td width="285" valign="middle" align="right" bgcolor="#ffffff" style="width:285px;padding:0;background-color:#ffffff !important;">
                  <img src="{{IMG}}certificaciones.png" width="210" height="21" alt="" style="display:block;width:210px;height:21px;border:0;outline:none;">
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

// ---------------------------------------------------------------------------
// DISENO 3 "BLOQUE AZUL" — basado en references/tercera.jpeg
// Bloque blanco arriba (nombre/puesto/logotipo de color a la izquierda,
// logo y certificaciones a la derecha) y bloque azul abajo con el contacto,
// la mano y la etiqueta "Te llevaras...".
const PLANTILLA_TERCERA = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="780" bgcolor="#ffffff"
       style="width:780px;border-collapse:collapse;background-color:#ffffff !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;">

  <!-- BLOQUE BLANCO -->
  <tr>
    <td bgcolor="#ffffff" style="background-color:#ffffff !important;padding:24px 22px 18px 22px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="736" bgcolor="#ffffff" style="width:736px;border-collapse:collapse;background-color:#ffffff !important;">
        <tr>

          <!-- Nombre, puesto y logotipo de color -->
          <td width="436" valign="top" bgcolor="#ffffff" style="width:436px;padding:0;background-color:#ffffff !important;">
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:26px;line-height:31px;mso-line-height-rule:exactly;font-weight:bold;letter-spacing:1px;color:#1f3b64 !important;text-transform:uppercase;">{{NOMBRE}}</div>
            <div style="margin:0;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:19px;line-height:24px;mso-line-height-rule:exactly;font-weight:normal;letter-spacing:0.5px;color:#3f6daf !important;">{{PUESTO}}</div>
            <div style="padding:10px 0 0 0;font-size:0;line-height:0;">
              <img src="{{IMG}}texto-color.png" width="300" height="21" alt="Empaque, Display, POP, Impresion Comercial" style="display:block;width:300px;height:21px;border:0;outline:none;">
            </div>
          </td>

          <!-- Logo y certificaciones -->
          <td width="300" valign="top" align="right" bgcolor="#ffffff" style="width:300px;padding:2px 0 0 0;background-color:#ffffff !important;">
            <img src="{{IMG}}logo-litoprocess.png" width="210" height="44" alt="Litoprocess - impresos + soluciones" style="display:block;width:210px;height:44px;border:0;outline:none;">
            <div style="padding:10px 0 0 0;font-size:0;line-height:0;">
              <img src="{{IMG}}certificaciones.png" width="210" height="21" alt="" style="display:block;width:210px;height:21px;border:0;outline:none;">
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- BLOQUE AZUL: contacto, mano y etiqueta -->
  <tr>
    <td bgcolor="#306fb4" style="background-color:#306fb4 !important;padding:22px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="736" bgcolor="#306fb4" style="width:736px;border-collapse:collapse;background-color:#306fb4 !important;">
        <tr>

          <!-- Correo -->
          <td width="245" valign="top" bgcolor="#306fb4" style="width:245px;padding:0 0 14px 0;background-color:#306fb4 !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="245" bgcolor="#306fb4" style="width:245px;border-collapse:collapse;background-color:#306fb4 !important;">
              <tr>
                <td width="22" valign="middle" bgcolor="#306fb4" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-mail-blanco.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                <td valign="middle" bgcolor="#306fb4" style="background-color:#306fb4 !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:12px;line-height:16px;mso-line-height-rule:exactly;color:#ffffff !important;word-break:break-all;overflow-wrap:break-word;"><a href="mailto:{{CORREO}}" style="color:#ffffff !important;text-decoration:none;">{{CORREO}}</a></td>
              </tr>
            </table>
          </td>

          <!-- Telefono -->
          <td width="245" valign="top" bgcolor="#306fb4" style="width:245px;padding:0 0 14px 0;background-color:#306fb4 !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="245" bgcolor="#306fb4" style="width:245px;border-collapse:collapse;background-color:#306fb4 !important;">
              <tr>
                <td width="22" valign="middle" bgcolor="#306fb4" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-tel-blanco.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                <td valign="middle" bgcolor="#306fb4" style="background-color:#306fb4 !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:12px;line-height:16px;mso-line-height-rule:exactly;color:#ffffff !important;word-break:break-all;overflow-wrap:break-word;"><a href="tel:{{TEL_HREF}}" style="color:#ffffff !important;text-decoration:none;">{{TELEFONO}}</a></td>
              </tr>
            </table>
          </td>

          <!-- Direccion (ocupa las dos filas) -->
          <td width="246" valign="top" rowspan="2" bgcolor="#306fb4" style="width:246px;padding:0;background-color:#306fb4 !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="246" bgcolor="#306fb4" style="width:246px;border-collapse:collapse;background-color:#306fb4 !important;">
              <tr>
                <td width="22" valign="top" bgcolor="#306fb4" style="width:22px;padding:1px 8px 0 0;"><img src="{{IMG}}icon-mapa-blanco.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                <td valign="top" bgcolor="#306fb4" style="background-color:#306fb4 !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:12px;line-height:16px;mso-line-height-rule:exactly;color:#ffffff !important;">{{DIRECCION_1}}<br>{{DIRECCION_2}}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>

          <!-- Mano + etiqueta "Te llevaras una gran impresion" -->
          <td width="245" valign="middle" bgcolor="#306fb4" style="width:245px;padding:0;background-color:#306fb4 !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#306fb4" style="border-collapse:collapse;background-color:#306fb4 !important;">
              <tr>
                <td valign="middle" bgcolor="#306fb4" style="background-color:#306fb4 !important;padding:0 8px 0 0;"><img src="{{IMG}}mano.png" width="26" height="46" alt="" style="display:block;width:26px;height:46px;border:0;outline:none;"></td>
                <td valign="middle" bgcolor="#306fb4" style="background-color:#306fb4 !important;padding:0;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#21275c" style="border-collapse:collapse;background-color:#21275c !important;">
                    <tr>
                      <td style="padding:4px 8px;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:10px;line-height:12px;mso-line-height-rule:exactly;font-weight:bold;color:#ffffff !important;white-space:nowrap;">Te llevar&aacute;s una gran impresi&oacute;n</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>

          <!-- Sitio web -->
          <td width="245" valign="middle" bgcolor="#306fb4" style="width:245px;padding:0;background-color:#306fb4 !important;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="245" bgcolor="#306fb4" style="width:245px;border-collapse:collapse;background-color:#306fb4 !important;">
              <tr>
                <td width="22" valign="middle" bgcolor="#306fb4" style="width:22px;padding:0 8px 0 0;"><img src="{{IMG}}icon-web-blanco.png" width="14" height="14" alt="" style="display:block;width:14px;height:14px;border:0;outline:none;"></td>
                <td valign="middle" bgcolor="#306fb4" style="background-color:#306fb4 !important;font-family:'Source Code Pro',Menlo,Consolas,'Courier New',monospace;font-size:12px;line-height:16px;mso-line-height-rule:exactly;color:#ffffff !important;word-break:break-all;overflow-wrap:break-word;"><a href="{{SITIO_HREF}}" style="color:#ffffff !important;text-decoration:none;">{{SITIO}}</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
