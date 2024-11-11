/* Cuando la usuaria haga click en la casilla, cambia el fondo de la tarjeta
    Pasos:
    - Selecciono los elementos html: input de la casilla y la tarjeta
    - Si la usuaria hace click, se cambia el fondo de pantalla deseado
*/
const fieldset = document.querySelector(".js-fieldset-diseña");
const backgroundNubes = document.querySelector(".js-nubes");
const backgroundEspacio = document.querySelector(".js-espacio");
const backgroundForky = document.querySelector(".js-forky");

const legendDesign = document.querySelector(".js-legend-design");
const formDesign = document.querySelector(".js-form-design");
const arrowDesign = document.querySelector(".js-arrow");

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
  if (event.target.id === "nubes") {
    cardFoundImg.classList.add("card-background-nubes");
    cardFoundImg.id = "nubes";
    cardFoundImg.classList.remove("card-background-espacio");
    cardFoundImg.classList.remove("card-background-forky");
  } else if (event.target.id === "espacio") {
    cardFoundImg.classList.add("card-background-espacio");
    cardFoundImg.id = "espacio";
    cardFoundImg.classList.remove("card-background-nubes");
    cardFoundImg.classList.remove("card-background-forky");
  } else if (event.target.id === "forky") {
    cardFoundImg.classList.add("card-background-forky");
    cardFoundImg.id = "forky";
    cardFoundImg.classList.remove("card-background-espacio");
    cardFoundImg.classList.remove("card-background-nubes");
  }
};

fieldset.addEventListener("click", changeFoundImg);
