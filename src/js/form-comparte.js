const legendShare = document.querySelector(".js-legend-share");
const formShare = document.querySelector(".js-form-share");
const arrowShare = document.querySelector(".js-icon-arrow-share");

const buttonCardCreate = document.querySelector(".js-card-create");
const openShare = document.querySelector(".js-share-open");

function handleOpenShare(event) {
  event.preventDefault();
  openShare.classList.remove("collapse");
  console.log("dataForm es", dataForm);
}

buttonCardCreate.addEventListener("click", handleOpenShare);

/*Cuando la usuaria haga click en crear tarjeta
    - enviar los datos del objeto al servidor (https://dev.adalab.es/api/info/data)
    - Si el servidor responde false
        - pintar un párrafo de error al generar tarjeta
    - Si el servidor responde true
      - pintar un párrafo: "La tarjeta ha sido creada"
      - con el id que me devuelve el servidor
        - mostrar enlace (url) de la nueva página para visualizar la tarjeta
        - modificar el enlace añadiendo el id 
*/

/*Crear un nuevo archivo html para mostrar la tarjeta
  - Recoger el id de la url para saber qué tarjeta pintar
  - Pedir al servidor los datos que contienen ese id
  - Pintar la respuesta del servidor en el nuevo html
*/
