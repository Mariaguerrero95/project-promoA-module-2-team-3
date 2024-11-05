/* DESPLEGABLE
Cuando la usuaria haga click en el legend
  se oculte el contenido del formulario

Para ello:
  - Recoger el legend y el div en constantes
  - escuchar el evento del click
    - poner display none en el div
*/

const legendShare = document.querySelector(".js-legend-share");
const formShare = document.querySelector(".js-form-share");
const arrowShare = document.querySelector(".js-icon-arrow-share");


/*Cuando la usuaria haga click en crear tarjeta, se despliegan las maneras de compartir
-seleccionar los elementos del html: boton, botones compartir,
-cuando la usuaria haga click
 -desplegar las opciones de compartir */

const buttonCardCreate = document.querySelector(".js-card-create");
const openShare = document.querySelector(".js-share-open");

function handleOpenShare(){
 openShare.classList.remove("collapse");
}

buttonCardCreate.addEventListener("click", handleOpenShare);