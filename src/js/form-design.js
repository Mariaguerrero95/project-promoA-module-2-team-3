/* Cuando la usuaria haga click en la casilla, cambia el fondo de la tarjeta
    Pasos:
    - Selecciono los elementos html: input de la casilla y la tarjeta
    - Si la usuaria hace click, se cambia el fondo de pantalla deseado
*/
const fieldset = document.querySelector(".js-fieldset-diseña");
const background1 = document.querySelector(".js-azul");
const background2 = document.querySelector(".js-amarillo");
const background3 = document.querySelector (".js-verde");
const card1 = document.querySelector(".js-card");

// background1.addEventListener("click", () => {
//     card1.classList.toggle ("card-background-blue");

// })
fieldset.addEventListener("click", (event) =>{
    console.log("event");
    if (event.target.id === "option1"){
        card1.classList.toggle("card-background-blue");
        
    } else if (event.target.id === "option2"){
        card1.classList.toggle ("card-background-yellow");
    } else if ( event.target.id === "option3"){
        card1.classList.toggle ("card-background-green");

    }    
})










