// Constantes de rellena
const formRellena = document.querySelector(".js-fieldset-rellena");
const inputNameAddressee = document.querySelector(".js-input-nameAddressee");
const inputMessage = document.querySelector(".js-input-message");
const inputImg = document.querySelector(".js-input-img");
const inputPhone = document.querySelector(".js-input-phone");
const inputNameSender = document.querySelector(".js-input-nameSender");
const inputInsta = document.querySelector(".js-input-insta");

const legendFillOut = document.querySelector(".js-legend-fillout");
const arrowFillOut = document.querySelector(".js-arrow-fillout");
const formFillOut = document.querySelector(".js-form-fillout");

legendShare.addEventListener("click", dropDown);

function dropDown() {
  formFillOut.classList.toggle("collapse");

  arrowFillOut.classList.toggle("rotate");
  console.log("clase rotate");
}

