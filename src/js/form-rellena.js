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


legendFillOut.addEventListener("click", dropDown1);

function dropDown1() {
  console.log('click')
  formFillOut.classList.toggle("collapse");
  arrowFillOut.classList.toggle("rotate");
}

// HACER QUE EL DESPLEGABLE RELLENA ESTÉ ABIERTO AL RECARGAR LA PÁGINA

document.addEventListener('DOMContentLoaded', () => {

  const fieldsetRellena = document.querySelector('.js-fieldset-rellena');
  const fieldsetDiseña = document.querySelector('.js-fieldset-diseña');
  const fieldsetComparte = document.querySelector('.js-legend-share');

  // Abre solo "RELLENA" al cargar la página
  fieldsetRellena.classList.add('open');

  // Los otros dos estén cerrados
  fieldsetDiseña.classList.remove('open');
  fieldsetComparte.classList.remove('open');

  // Alterna la clase 'open' cuando se hace clic en cada legend
  
    document.querySelectorAll('legend').forEach(legend => {
      legend.addEventListener('click', () => {
        const parentFieldset = legend.parentElement;

        // Cierra los otros fieldsets al abrir uno
        if (!parentFieldset.classList.contains('open')) {
          document.querySelectorAll('fieldset').forEach(fieldset => {
            fieldset.classList.remove('open');
          });
        }
        
        // Alterna la clase 'open' en el fieldset seleccionado
        parentFieldset.classList.toggle('open');
      });
    });
  });
