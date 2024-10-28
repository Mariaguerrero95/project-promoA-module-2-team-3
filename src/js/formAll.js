// Colapsabe de diseña

legendDesign.addEventListener("click", collapse) 

function collapse () {
    formDesign.classList.toggle ("collapse")
    arrowDesign.classList.toggle ("rotate")
        
}

// Colapsabe de rellena
legendFillOut.addEventListener("click", dropDown1);
function dropDown1() {
  console.log('click')
  formFillOut.classList.toggle("collapse");
  arrowFillOut.classList.toggle("rotate");
}

// Colapsabe de comparte
legendShare.addEventListener("click", dropDown);

function dropDown() {
  formShare.classList.toggle("collapse");

  arrowShare.classList.toggle("rotate");
  console.log("clase rotate");
}