/* DESPLEGABLE
Cuando la usuaria haga click en el legend
  se oculte el contenido del formulario

Para ello:
  - Recoger el legend y el div en constantes
  - escuchar el evento del click
    - poner display none en el div
*/

const legendShare = document.querySelector('.js-legend-share');
const formShare = document.querySelector('.js-form-share');
const arrowShare = document.querySelector('.js-icon-arrow-share');

legendShare.addEventListener('click', dropDown);

function dropDown() {

  formShare.classList.toggle('collapse');

  arrowShare.classList.toggle('rotate');
  console.log('clase rotate')
}