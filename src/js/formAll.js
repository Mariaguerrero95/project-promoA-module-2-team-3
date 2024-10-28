// // Colapsabe de diseña

// legendDesign.addEventListener("click", collapse) 

// function collapse () {
//     formDesign.classList.toggle ("collapse");
//     arrowDesign.classList.toggle ("rotate");
// }

// // Colapsabe de rellena
// legendFillOut.addEventListener("click", dropDown1);
// function dropDown1() {
//   console.log('click')
//   formFillOut.classList.toggle("collapse");
//   arrowFillOut.classList.toggle("rotate");
// }




const formContainer = document.querySelector(".js-div-container__form");

// Colapsabe de comparte
formContainer.addEventListener("click", dropDown);

function dropDown(event) {
  if(event.target.classList.contains('js-share-drop-down')) {
    console.log('he hecho click en comparte')
    formShare.classList.toggle("collapse");
    arrowShare.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formFillOut.classList.add("collapse");
    arrowFillOut.classList.remove("rotate");

    
  } else if (event.target.classList.contains('js-fillout-drop-down')){
    formFillOut.classList.toggle("collapse");
    arrowFillOut.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formShare.classList.add("collapse");
    arrowShare.classList.remove("rotate");
  }

}