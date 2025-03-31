<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recoger y sanitizar los datos
  $nombre  = isset($_POST['nombre']) ? filter_var($_POST['nombre'], FILTER_SANITIZE_STRING) : '';
  $email   = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
  $mensaje = isset($_POST['mensaje']) ? filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING) : '';

  // Configurar destinatario y contenido del correo
  $destinatario = "voltlinkOficial@hotmail.com";
  $asunto = "Nuevo mensaje de contacto de $nombre";
  $contenido = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
  $contenido .= "Nombre: $nombre\n";
  $contenido .= "Correo Electrónico: $email\n";
  $contenido .= "Mensaje:\n$mensaje\n";
  $cabeceras = "From: $email\r\nReply-To: $email\r\n";

  // Intentar enviar el correo
  if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
    echo "La información se envió correctamente, nos pondremos en contacto con usted lo más pronto posible.";
  } else {
    http_response_code(500);
    echo "Hubo un problema al enviar la información. Por favor, inténtelo de nuevo.";
  }
} else {
  http_response_code(405);
  echo "Método no permitido";
}
?>
