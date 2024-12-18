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

const playBtn = document.querySelector(".js-audioPlay");
const pauseBtn = document.querySelector(".js-audioPause");
const audio = document.querySelector(".js-audio");

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
  preview(event, "phone", cardPhone);
  preview(event, "nameSender", cardNameSender);
  preview(event, "insta", cardInsta);
});

// FUNCIONALIDAD DEL BOTÓN RESET (está fuera del form y hay que enlazarlo)

const defaultImageURL = "images/mr-potato.png";

// Resetear los valores de la card
cardButtonReset.addEventListener("click", () => {
  cardNameAddressee.textContent = "To: Woody";
  cardMessage.textContent = "Te voy a echar mucho de menos";
  cardPhone.textContent = "612345678";
  cardNameSender.textContent = "Mr. Potato";
  cardInsta.textContent = "@mrpotato";
  cardPhotoImg.style.backgroundImage = 'url("images/mr-potato.png")';
  cardFoundImg.classList.add("card-background-nubes");
  cardFoundImg.classList.remove("card-background-espacio");
  cardFoundImg.classList.remove("card-background-forky");
  // Resetear los valores de los campos del formulario
  formContainer.reset();
  // nameAddresseeInput.value = "";
  //     messageInput.value = "";
  //     phoneInput.value = "";
  //     nameSenderInput.value = "";
  //     instaInput.value = "";
  profileImage.style.backgroundImage = "";
});

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});
