<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre  = htmlspecialchars(trim($_POST['nombre']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // Configurar a quién se enviará el correo (tu email)
    $destinatario = "tuemail@ejemplo.com";
    $asunto = "Nuevo mensaje de contacto de $nombre";
    $cuerpo = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Correo Electrónico: $email\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";
    $cabeceras = "From: $email\r\nReply-To: $email\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "Mensaje enviado correctamente. Pronto nos pondremos en contacto.";
    } else {
        echo "Ha ocurrido un error al enviar el mensaje. Inténtalo nuevamente.";
    }
} else {
    echo "Acceso denegado.";
}
?>
