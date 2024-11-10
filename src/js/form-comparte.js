const legendShare = document.querySelector(".js-legend-share");
const formShare = document.querySelector(".js-form-share");
const arrowShare = document.querySelector(".js-icon-arrow-share");

const buttonCardCreate = document.querySelector(".js-card-create");
const openShare = document.querySelector(".js-share-open");
const linkCard = document.querySelector(".js-link");
let paragraphUrlCard = document.querySelector(".js-urlCard");

const btnTwitter = document.querySelector(".js-twitter");

const dataForm = {
  field1: 1,
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  photo: "",
};

const objectCreated = () => {
  dataForm.field2 = inputNameAddressee.value;
  dataForm.field3 = inputMessage.value;
  dataForm.field4 = inputPhone.value;
  dataForm.field5 = inputNameSender.value;
  dataForm.field6 = inputInsta.value;
  dataForm.field7 = ""; // fondo de la tarjeta
  dataForm.photo = fr.result;
};

function handleCreateCard(event) {
  event.preventDefault();
  objectCreated();

  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    body: JSON.stringify(dataForm),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      const idCard = data.infoID;

      linkCard.href = `./cardDetails.html?id=${idCard}`;

      btnTwitter.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20para%20que%20no%20te%20olvides%20de%20mi%20${inputNameAddressee.value}&url=./cardDetails.html?id=${idCard}`;

      linkCard.classList.remove("collapse");

      paragraphUrlCard.innerHTML = linkCard.href;

      openShare.classList.remove("collapse");
    });
}

buttonCardCreate.addEventListener("click", handleCreateCard);

function linkTwitter() {
  console.log(btnTwitter.href);
}

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
