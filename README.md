# form-crud-DesArrolladoras
![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-violet) <br/>
<br/>
Este repositorio contiene el código fuente de un formulario de alta a una página web, una base de datos con una tabla para guardar la información y un script PHP que valida los datos, los guarda en la tabla y permite su consulta. Fue desarrollado como ejercicio final del curso "Desarrollo Full-Stack (Nivel 3) ED.2022" del programa Samsung DesArrolladoras.

### Front-end
El formulario de alta contiene los siguientes campos:

- Nombre
- Primer apellido
- Segundo apellido
- Email
- Login
- Password

En este ejercicio se implementa una doble validación, tanto desde el lado del cliente (HTML) como desde el lado del servidor (PHP). Se comprueba que todos los campos estén correctamente llenos antes de enviar los datos a una base de datos MySQL.

Las siguientes validaciones se aplican:

- Todos los campos son obligatorios. En caso de dejar algún campo en blanco, se muestra un mensaje de error.
- El campo "Email" debe tener un formato de correo electrónico válido.
- El campo "Password" debe tener una extensión entre 4 y 8 caracteres.
- El estilo CSS del formulario es personalizado y puede ser modificado según el criterio artístico del desarrollador.

### Base de Datos
Se crea una base de datos con una tabla que contiene los campos necesarios para guardar la información recibida.

### Back-end
Se crea un script PHP para validar los datos recibidos desde el front-end.

Las siguientes validaciones se aplican en el back-end:

- Si el email del usuario ya está registrado en la base de datos, se muestra un mensaje de error y se vuelve a ejecutar el formulario de registro.
- Si los datos son correctos y el usuario no está registrado previamente, se muestra un mensaje de éxito "Registro completado con éxito". - Los datos se guardan en la tabla de la base de datos y se muestra un botón de "Consulta" que al pulsarlo muestra una lista de los usuarios registrados en la base de datos.

### Estructura del Repositorio
El repositorio está estructurado de la siguiente manera:

- **index.html**: Archivo HTML que contiene la estructura del formulario.
- **style.css**: Archivo CSS que define los estilos del formulario.
- **script.php**: Archivo PHP que valida los datos y realiza las operaciones de consulta en la base de datos.
- **database.sql**: Archivo SQL que contiene el script para crear la base de datos y la tabla necesaria.
- **images/**: Directorio que contiene las imágenes utilizadas en el formulario.

### Uso
- Clona este repositorio en tu máquina local: `git clone https://github.com/CrisCorreaS/form-crud-DesArrolladoras.git`
- Importa el archivo database.sql en tu servidor de MySQL para crear la base de datos y la tabla necesaria.
- Configura las credenciales de conexión a la base de datos en el archivo script.php.
- Abre el archivo index.html en tu navegador web.
- Completa el formulario con los datos requeridos y observa las validaciones en tiempo real.
- Al hacer clic en el botón "Enviar", se mostrará un mensaje de éxito si todos los campos se validan correctamente.
- Si deseas consultar los usuarios registrados, haz clic en el botón "Consulta" para ver la lista en pantalla. 
