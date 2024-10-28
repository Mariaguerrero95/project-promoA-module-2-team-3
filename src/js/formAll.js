const formContainer = document.querySelector(".js-div-container__form");

formContainer.addEventListener("click", dropDown);

function dropDown(event) {

  if (event.target.classList.contains('js-design-drop-down')){
    formDesign.classList.toggle("collapse");
    arrowDesign.classList.toggle("rotate");

    formFillOut.classList.add("collapse");
    arrowFillOut.classList.remove("rotate");

    formShare.classList.add("collapse");
    arrowShare.classList.remove("rotate");
  }

  if (event.target.classList.contains('js-fillout-drop-down')){
    formFillOut.classList.toggle("collapse");
    arrowFillOut.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formShare.classList.add("collapse");
    arrowShare.classList.remove("rotate");
  }

  if(event.target.classList.contains('js-share-drop-down')) {
    formShare.classList.toggle("collapse");
    arrowShare.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formFillOut.classList.add("collapse");
    arrowFillOut.classList.remove("rotate");
  }
}