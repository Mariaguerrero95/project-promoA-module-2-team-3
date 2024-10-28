// Constantes de card

const cardContainer = document.querySelector(".js-card");
const cardFoundImg = document.querySelector(".js-card-found-img");
const cardNameAddressee = document.querySelector(".js-card-nameAddressee");
const cardMessage = document.querySelector(".js-card-message");
const cardPhotoImg = document.querySelector(".js-card-photo-img");
const cardPhone = document.querySelector(".js-card-phone");
const cardNameSender = document.querySelector(".js-card-nameSender");
const cardInsta = document.querySelector(".js-card-insta");
const cardButtonReset = document.querySelector(".js-button-reset");

/* PREVISUALIZACIÓN
Cuando la usuaria escriba en el input de rellena, quiero que se previsualice en el card:
1. Recoger todos los inputs de rellena
2. Recoger todos los <p> de card
3. Cuando escriba en el input
  - recoger el valor del input
  - poner en el html de card lo que vale el input
4. Si el id del input es igual a la clase que le hemos dado al <p> de card
  - pinta en el <p> correspondiente el valor del input correspondiente 
*/

function preview(event, idName, cardClass) {
  if (event.target.id === idName) {
    cardClass.innerHTML = event.target.value;
  }
}

formRellena.addEventListener("input", (event) => {
  preview(event, "nameAddressee", cardNameAddressee);
  preview(event, "message", cardMessage);
  preview(event, "img", cardPhotoImg);
  preview(event, "phone", cardPhone);
  preview(event, "nameSender", cardNameSender);
  preview(event, "insta", cardInsta);
});


// FUNCIONALIDAD DEL BOTÓN RESET (está fuera del form y hay que enlazarlo)

const defaultImageURL = "images/mr-potato.png";

// Resetear los valores de la card
cardButtonReset.addEventListener("click", () => {
  cardNameAddressee.textContent = "To: Buddy";
  cardMessage.textContent = "Te voy a echar mucho de menos";
  cardPhone.textContent = "612345678";
  cardNameSender.textContent = "Mr. Potato";
  cardInsta.textContent = "@mrpotato";
  cardPhotoImg.style.backgroundImage = 'url("images/mr-potato.png")';
  card1.classList.remove("card-background-blue");
  card1.classList.remove("card-background-yellow");
  card1.classList.remove ("card-background-green");
// Resetear los valores de los campos del formulario
  formContainer.reset();
  profileImage.style.backgroundImage = "";
}); 
