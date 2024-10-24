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

/* FORMA 1 DE PREVISUALIZACIÓN
formRellena.addEventListener ('input', event => {
  console.log('event.target.value es:', event.target.value);
  console.log('event.target.id es:', event.target.id);
  
  console.log(event.target);

  if (event.target.id === 'nameAddressee') {
    cardNameAddressee.innerHTML = event.target.value;
  } else if (event.target.id === 'message') {
    cardMessage.innerHTML = event.target.value;
  } else if (event.target.id === 'img') {
    cardPhotoImg.innerHTML = event.target.value;
  } else if (event.target.id === 'phone') {
    cardPhone.innerHTML = event.target.value;
  } else if (event.target.id === 'nameSender') {
    cardNameSender.innerHTML = event.target.value;
  } else if (event.target.id === 'insta') {
    cardInsta.innerHTML = event.target.value;
  }
})
*/

// FORMA 2 DE PREVISUALIZACIÓN
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
function resetForm() {
  console.log('hago click en reset')
  formContainer.reset();
  console.log('reseteo form')
  // location.reload();
  // console.log('reseteo card')
}

cardButtonReset.addEventListener("click", resetForm);


