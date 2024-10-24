// Constantes de rellena
const formRellena = document.querySelector(".js-fieldset-rellena");
const inputNameAddressee = document.querySelector(".js-input-nameAddressee");
const inputMessage = document.querySelector(".js-input-message");
const inputImg = document.querySelector(".js-input-img");
const inputPhone = document.querySelector(".js-input-phone");
const inputNameSender = document.querySelector(".js-input-nameSender");
const inputInsta = document.querySelector(".js-input-insta");



const legendFillout = document.querySelector(".js-legend-share");
const formFillout = document.querySelector(".js-form-share");
const arrowFillout = document.querySelector(".js-icon-arrow-share");

legendShare.addEventListener("click", dropDown);

function dropDown() {
  formShare.classList.toggle("collapse");

  arrowShare.classList.toggle("rotate");
  console.log("clase rotate");
}
