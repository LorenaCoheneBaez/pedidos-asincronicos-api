# Pelis para todos | Pedidos asincrónicos a una API

## Objetivo:

Conectar nuestro front-end con el back-end, consumiendo una API Rest (movies-db) de manera
asíncrona desde el front-end usando fetch API.

### Pautas:
#### *Home
- Tendremos que capturar el ​evento click sobre ​cada ​estrellita.
- Al hacer clic en la estrellita debe almacenar en el ​storage el id de la película seleccionada.


#### *Favoritos
- Listar las películas que han sido marcadas como favoritas por el usuario.
- Si aún no tuviese ninguna película, esta página debe indicar que aún no tiene nada.
- Agregar en el encabezado de home.html un botón a “Mis películas favoritas”. Este botón solo debe aparecer si el usuario ya tiene películas favoritas.
***
## Tecnologías usadas

<p align="left">
 <!–– JAVASCRIPT ––>
<a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" data-bs-toggle="tooltip" title="JavaScript"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javaScript"/> </a>
<!-- EXPRESS -->
<a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction" alt="Express Js" ><img src= "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
<!-- MYSQL -->
<a href="https://www.mysql.com/" alt="Express Js" ><img src= "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" /></a>
<!–– CSS ––>
<a href="https://www.w3schools.com/css/" target="_blank" data-bs-toggle="tooltip" title="CSS3"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> </a>
  </p>
  
***
### Instalación de la base de datos relacional *movies-db.sql*:

- Debe tener instalado un gestor de base de datos, por ejemplo: MYSQL Workbench (https://www.mysql.com/products/workbench/) o Heidi db (https://www.heidisql.com/).

- Desde su gestor de base de datos, correr el script que se encuentra en:

   `pedidos-asincronicos-api/backend/src/database/script/movies-db.sql`

- Levantar el servidor para la base de datos desde su gestor de base de datos.

### ¿Cómo instalar el proyecto?

#### Desde la terminal:

- Clonar el proyecto:
````
git clone https://github.com/LorenaCoheneBaez/pedidos-asincronicos-api.git
````
### Es necesario instalar las dependencias en las dos carpetas del proyecto.

***
***
### **Carpeta backend (contiene la API)**

- Ingresar a la carpeta del proyecto: 
````
cd pedidos-asincronicos-api
cd backend
````
- Para instalar las dependencias correr: 
````
npm install
````
### Levantar el servidor de la Api: 
````
npm test
````
### Endpoints de la Api:
***
*Películas (GET):*
- Listado "http://localhost:3001/api/movies"

- Detalle de película "http://localhost:3001/api/detail/:id"

- Películas recomendadas por rating "http://localhost:3001/api/recomended/:rating"

*Películas (POST):*
- Agregar película "http://localhost:3001/api/create"

*Películas (DELETE):*
- Eliminar película "http://localhost:3001/api/delete/:id"

*Películas (PUT):*
- Editar película "http://localhost:3001/api/update:id"
***
*Géneros (GET):*

- Listado de géneros "http://localhost:3001/api/genres"

- Detalle de géneros "http://localhost:3001/api/genres/detail/:id"

- Listado de películas asociadas a un género "http://localhost:3001/api/genres/:id/movies"

***
*Actores (GET)*

- Listado de actores "http://localhost:3001/api/actors"

- Detalle de actores "http://localhost:3001/api/actors/detail/:id"

- Listado de películas asociadas a un actor "http://localhost:3001/api/actors/:id/movies"

*Actores (POST)*

- Agregar un actor "http://localhost:3001/api/actors/create"

*Actores (PUT)*

- Editar un actor "http://localhost:3001/api/actors/update/:id"

*Actores (DELETE)*

- Agregar un actor "http://localhost:3001/api/actors/delete/:id"

***
***
#
### **Carpeta frontend (contiene la vista)**
***
- Ingresar a la carpeta del proyecto: 
````
cd pedidos-asincronicos-api
cd frontend
````
- Para instalar las dependencias correr: 
````
npm install
````
### Levantar el servidor de la vista: 
````
npm start
````
### Rutas:

- Home http://localhost:3000/
- Favoritos http://localhost:3000/favoritos
- Agregar película http://localhost:3000/agregar
