 


const cardDestinatario = document.querySelector (".js-card-destinatario");
const cardText = document.querySelector (".js-text");
const cardImage = document.querySelector (".js-image");
const cardRemitente = document.querySelector (".js-remitente");
const cardInstagram = document.querySelector (".js-instagram");
const cardTelefono = document.querySelector (".js-number");
const fieldset = document.querySelector (".js-fieldset-rellena");

const inputDestinatario = document.querySelector (".js-destinatario");
const inputText = document.querySelector (".js-text");
const inputImage = document.querySelector (".js-image");
const inputRemitente = document.querySelector (".js-remitente");
const inputInstagram = document.querySelector (".js-instagram");
const inputTelefono = document.querySelector (".js-number");




// Cuando la usuaria escriba en el input destinatario queremos que se previsualice en card


fieldset.addEventListener ("input", (event) => {
 console.log(event.value);

  cardDestinatario.innerHTML = event.value;
  



 })



