# Karvi-Challenge

By Abel Derviche

# Instrucciones para correr la aplicación

- Para correr el front ir a la carpeta front y correr los siguientes comandos.

> npm install

> npm start

- Para correr el back ir a la carpeta back y correr los siguientes comandos.

> npm install 

> npm run watch

La app-front tiene estar corriendo en http://localhost:8080/ y la API en http://localhost:3001/

Para ver la documentación de la api debería estar  en http://localhost:3001/api/api-docs/



# General
Como pedía el enunciado se creo un proyecto en react sin utilizar el *create-react-app*, utilicé **Webpack** para armar la app. 
La app carga el layout principal y al momento de cargar hace la pegada para obtener los autos. También carga las ciudades disponibles de los autos.
Los filtros se van a cargar según los devuelva la pegada. El elemento *availableFilters* de la respuesta es quien orquesta si se muestra el filtro y las opciones de ese parámetro, para que sea variable y si se decide apagar un filtro desde el back el front resuelve solo.
Por otro lado el filtro de ciudad realiza otra pegada al back para filtrar los autos por ciudad.

Por el lado de la API, es una REST simple que admite dos rutas con, solo los metodos GET, /cities para obtener las ciudades y /cars para obtener los autos y filtros disponibles, si a esta ultima ruta se le pasa por parámetro un código IATA de ciudad, va a filtrar los autos por ciudad.


# Aclaraciones
Desarrollé todo para que el front dibuje y haga los filtros una vez recibidos los datos de la API. Debido a un tema de tiempos no logré hacer que cada filtro realice una pegada para ir filtrando desde el back, pero si hice esto en el filtro de ciudad, el cual obtiene los autos desde la pegada filtrandolos la API por ciudad
## Pendientes
* Temas de maquetación y diseño. No llegué a hacer los filtros en modo mobile. Tampoco llegué a aplicar 100% el diseño ya que prioricé la funcionalidad
* Que al realizar que todos los filtros sean por pegada y los resuelva el back. Faltaría modificar tanto el back como el front
* Al ser una API simple que obtiene solo por get no está securizada por algún método token por header o por dominio. 

# Tecnologías usadas

- React
- Redux, Redux-Thunk
- Antd
- Sass
- Webpack
- Typescript
- Node
- Express
- Swagger
- Axios
