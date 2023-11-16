# Pokemon explorer-prueba técnica

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con las API:

https://pokeapi.co/

https://www.themealdb.com/

## Tecnologías y dependencias
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat)](https://getbootstrap.com/docs/4.1/getting-started/introduction/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)](https://axios-http.com/docs/intro) [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)](https://react.dev/learn) [![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat)](https://redux.js.org/introduction/getting-started) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Diseño, vistas y funcionamiento :computer:](#diseño-vistas-y-funcionamiento) 


- [Errores conocidos :no_entry:](#errores-conocidos) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Se ha propuesto el proyecto de desarrollar una aplicación web en la que al seleccionar los pokemons de la API **PokeAPI**: se nos muestren sus datos y se les asocie (sin ningún criterio de selección particular) una comida de la API **TheMealDB**.

### Diseño, vistas y funcionamiento

Para desarrollar la aplicación que se nos requiere, hemos seguido un patrón de arquitectura de software *Modelo Vista Controlador*, generando una *SPA* (single page application) segmentada en dos vistas más un encabezado que simplemente contiene un enlace a la vista inicial y un footer.

La primera vista que encontramos al acceder, es la vista **Home**: en esta vista se hace una llamada a la PokeAPI del tipo *GET* al enlace https://pokeapi.co/api/v2/pokemon/ . Esta llamada nos dvuelve un *array* de objetos en el que cada uno contendría un nombre de pokemon y un *URL* a la API donde se contendría el conjunto de información del pokemon. Obtenida esta lista se emplea el método *map* sobre la misma, mostrando cada pokemon con su nombre a través de unas tarjetas. Podemos hacer click sobre estas tarjetas para que carguen a *Redux* estos dos datos del pokemon y nos hagan navegar a la otra vista de la aplicación.

![home](https://iili.io/JCOteKx.md.jpg)

La otra vista de la aplicación es la vista **ShowPokemon** donde encontramos un diseño similar al de las "pokédex" que aparecen en las producciones de pokemon, con un Input en su interior en el que se nos insta a buscar algún pokemon por su nombre. Como accederemos a esta vista tras haber cargado a Redux los datos de un pokemon, la vista los importará y empleará el URL que contienen para hacer una llamada del tipo GET a la PokeAPI y traer toda la información del pokemon. Esta información se mostrará en pantalla (incluida una imagen del pokemon) y además se hará una llamada también del tipo GET a la API TheMealDB, al enlace https://www.themealdb.com/api/json/v1/1/random.php que nos devolverá la información de un plato aleatorio contenido en su base de datos, mostrándose también su nombre y una imagen en la pokédex. Si empleamos el Input de búsqueda para buscar algún otro pokemon, se realizará una llamada a la PokeAPI que traerá sus datos y se sustituirán los del pokemon que habíamos clickado por éstos, realizado además otra llamada a TheMealDB para sustituir también el plato que se muestra en pantalla.

![showpokemon](https://iili.io/JndA76J.md.jpg)

### Errores conocidos

-No se ha podido incluir una imagen de cada pokemon en las tarjetas de la vista home, dado que en la estructura de la PokeAPI no hay un listado de pokemons que incluya imágenes, el listado únicamente incluye nombre y una URL con sus datos como ya habíamos mencionado. Esto se podría haber resulto realizando una segunda llamada a través del URL del pokemon en la vista Home, pero entendemos que era innecesario ya que la misma imagen se mostrará en la otra vista.

-Hemos incluido los recursos de búsqueda en la vista ShowPokemon en lugar de incluirlos en la vista Home, dado que el *endopoint* que nos proporciona la PokeAPI nos devuelve los datos de un pokemon en el mismo formato en que nos los devuelve el URL que empleamos en la vista ShowPokemon, mientras que el listado de pokemons que mostramos en Home se encuentra en un formato distinto.
Además integrar el Input de búsqueda dentro de la pokédex se ha valorado como una opción acrode al diseño.

-Al iniciar la vista ShowPokemon o al cambiar al pokemon que se muestra, se carga un nuevo plato de TheMealDB, pero para ello se cargan rápidamente diferentes platos hasta que finalmente se queda uno fijo. De todas formas el resultado da la impresión de ser una animación en la que la pokédex estaría seleccionando el plato adecuado.

### Recursos alternativos y fuentes

https://pokeapi.co/

https://www.themealdb.com/

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://freeimage.host/
