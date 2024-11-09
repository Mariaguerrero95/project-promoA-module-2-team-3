const formContainers = document.querySelectorAll(".js-legend");

const handleClick = (event) => {
  if (event.currentTarget.classList.contains("js-legend-design")) {
    formDesign.classList.toggle("collapse");
    arrowDesign.classList.toggle("rotate");

    formFillOut.classList.add("collapse");
    arrowFillOut.classList.remove("rotate");

    formShare.classList.add("collapse");
    arrowShare.classList.remove("rotate");
  } else if (event.currentTarget.classList.contains("js-legend-fillout")) {
    formFillOut.classList.toggle("collapse");
    arrowFillOut.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formShare.classList.add("collapse");
    arrowShare.classList.remove("rotate");
  } else if (event.currentTarget.classList.contains("js-legend-share")) {
    formShare.classList.toggle("collapse");
    arrowShare.classList.toggle("rotate");

    formDesign.classList.add("collapse");
    arrowDesign.classList.remove("rotate");

    formFillOut.classList.add("collapse");
    arrowFillOut.classList.remove("rotate");
  }
};

for (const legend of formContainers) {
  legend.addEventListener("click", handleClick);
}
