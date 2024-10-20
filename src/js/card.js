// Constantes de formRellena
const formRellena = document.querySelector('.js-fieldset-rellena');
const inputNameAddressee = document.querySelector('.js-input-nameAddressee');
const inputMessage = document.querySelector('.js-input-message');
const inputImg = document.querySelector('.js-input-img');
const inputPhone = document.querySelector('.js-input-phone');
const inputNameSender = document.querySelector('.js-input-nameSender');
const inputInsta = document.querySelector('.js-input-insta');

// Constantes de card
const cardNameAddressee = document.querySelector('.js-card-nameAddressee');
const cardMessage = document.querySelector('.js-card-message');
const cardImg = document.querySelector('.js-card-img');
const cardPhone = document.querySelector('.js-card-phone');
const cardNameSender = document.querySelector('.js-card-nameSender');
const cardInsta = document.querySelector('.js-card-insta');

const cardNames = {
  nameAddressee: document.querySelector('.js-card-nameAddressee')
}

/* Cuando la usuaria escriba en el input, quiero que se previsualice en el card.
1. Recoger todos los inputs de rellena
2. Recoger todos los p de card
3. Cuando escriba en el input
  - recoger el valor del input
  - poner en el html de card lo que vale el input
*/

// formRellena.addEventListener ('input', event => {
//   console.log('event.target.value es:', event.target.value);
//   console.log('event.target.id es:', event.target.id);
  
//   if (event.target.id === 'nameAddressee') {
//     cardNameAddressee.innerHTML = event.target.value;
//   } else if (event.target.id === 'message') {
//     cardMessage.innerHTML = event.target.value;
//   } else if (event.target.id === 'img') {
//     cardImg.innerHTML = event.target.value;
//   } else if (event.target.id === 'phone') {
//     cardPhone.innerHTML = event.target.value;
//   } else if (event.target.id === 'nameSender') {
//     cardNameSender.innerHTML = event.target.value;
//   } else if (event.target.id === 'insta') {
//     cardInsta.innerHTML = event.target.value;
//   }
// })


function preview (event, idName, cardClass) {
  if (event.target.id === idName) {
    cardClass.innerHTML = event.target.value;
  } 
}


formRellena.addEventListener ('input', event => {
  preview(event, 'nameAddressee', cardNameAddressee);
  preview(event, 'message', cardMessage);
  preview(event, 'img', cardImg);
  preview(event, 'phone', cardPhone);
  preview(event, 'nameSender', cardNameSender);
  preview(event, 'insta', cardInsta);
});



  // if si event.target.id esta en el objeto cardnames
  // cardNames[event.target.id].innerHTML = event.target.value;
