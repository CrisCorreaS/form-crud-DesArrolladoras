<?php
    $nombre = $_POST["NOMBRE"]; 
    $apellido1 = $_POST["APELLIDO1"];
    $apellido2 = $_POST["APELLIDO2"];
    $email = $_POST["EMAIL"];
    $login = $_POST["LOGIN"];
    $userpassword = $_POST["PASSWORD"]; 

    //Definimos los parámetros de conexión a la base de datos (phpMyAdmin)
    $servername = "localhost";
    $username = "root";
    $password = "123.";
    $dbname = "laboratoriofinal";

    //Hacemos doble validación con PHP (Ya estaban en el archivo script.js)
    if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($login) || empty($userpassword)) {
        die("Hay campos incompletos, tienes que completa todos los campos del formulario");
    }

    //Hacemos la doble validación del formato de correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("El formato del correo electrónico no es válido.");        
    }

    //Hacemos la doble validación de la longitud de la contraseña (entre 4 y 8 caracteres)
    if (strlen($userpassword) < 4 || strlen($userpassword) > 8) {
        die("La contraseña debe tener entre 4 y 8 caracteres.");
    }
    
    //Establecemos la conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

   //Con una query verificamos si el correo electrónico ya existe en la base de datos
   $sql = "SELECT ID FROM usuario WHERE EMAIL = '$email'";
   $result = $conn->query($sql);
   if ($result->num_rows > 0) {
       die("Este correo electrónico ya está registrado. Tienes que introducir otro correo electrónico");
   }

    //Con otra query insertamos los datos en la base de datos (excepto el ID que es Autoincremental)
    $sql = "INSERT INTO usuario (NOMBRE, APELLIDO1, APELLIDO2, EMAIL, LOGIN, PASSWORD) VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$userpassword')";
    if ($conn->query($sql) === TRUE) {
        echo "El usuario se ha registrado con éxito";
    } else {
        echo "Ha habido el siguiente error: " . $sql . "<br>" . $conn->error;
    }
    

    //Ejecutamos una query para listar todos los usuarios registrados 
    $sql = "SELECT * FROM usuario";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) { //Si hay al menos un registro se pinta lo siguiente:
        echo "<h2>Estos son los usuarios registrados en nuestra base de datos:</h2>";
        echo "<ul>";
        while ($row = $result->fetch_assoc()) { //Hacemos este bucle para que vayan apareciendo todos los usuarios registrados
            echo "<li>" . $row["NOMBRE"] . " " . $row["APELLIDO1"] . " " . $row["APELLIDO2"] . "</li>";
        }
        echo "</ul>";
    } else {//Si no hay registros pintamos:
        echo "No hay ningún usuario registrado";
    }

    //Cierre de la conexión a la base de datos
    $conn->close();
?>