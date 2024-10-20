'use strict';



import "./form-design";
import "./form-rellena";
import "./form-comparte";
import "./card";


// cuando la usuaria escriba en el input, 
// recoger la informacion y mostarla en card

const inputDestinatario = document.querySelector (".js-destinatario");
const cardDestinatario = document.querySelector (".js-destinatario");

inputDestinatario.addEventListener ("input", (event) => {
    console.log(event.target.value);
   
     cardDestinatario.innerHTML = event.target.value;
    
   
   
   
    })


