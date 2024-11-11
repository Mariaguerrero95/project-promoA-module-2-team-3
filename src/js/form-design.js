/* Cuando la usuaria haga click en la casilla, cambia el fondo de la tarjeta
    Pasos:
    - Selecciono los elementos html: input de la casilla y la tarjeta
    - Si la usuaria hace click, se cambia el fondo de pantalla deseado
*/
const fieldset = document.querySelector(".js-fieldset-diseña");
const background1 = document.querySelector(".js-azul");
const background2 = document.querySelector(".js-amarillo");
const background3 = document.querySelector(".js-verde");

const legendDesign = document.querySelector(".js-legend-design");
const formDesign = document.querySelector(".js-form-design");
const arrowDesign = document.querySelector(".js-arrow");

// background1.addEventListener("click", () => {
//     card1.classList.toggle ("card-background-nubes");

// })
/*Crear una función que reciba qué casilla se marca, desmarque las demás y pinte la clase correspondiente a esa casilla en el fondo de la tarjeta
Si marca el fondo azul
    se pinta el azul
Si marca el fondo amarillo
    se pinta el amarillo
Si marca el verde
    se pinta el verde
PASOS
- selecciono los elementos html
- Cuando la usuaria haga click en formulario
*/

const changeFoundImg = (event) => {
  if (event.target.id === "option1") {
    cardFoundImg.classList.add("card-background-nubes");
    cardFoundImg.classList.remove("card-background-naves");
    cardFoundImg.classList.remove("card-background-forky");
  } else if (event.target.id === "option2") {
    cardFoundImg.classList.add("card-background-naves");
    cardFoundImg.classList.remove("card-background-nubes");
    cardFoundImg.classList.remove("card-background-forky");
  } else if (event.target.id === "option3") {
    cardFoundImg.classList.add("card-background-forky");
    cardFoundImg.classList.remove("card-background-naves");
    cardFoundImg.classList.remove("card-background-nubes");
  }
};

fieldset.addEventListener("click", changeFoundImg);
