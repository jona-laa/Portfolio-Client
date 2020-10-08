// DOM element selectors
const header = document.querySelector('.header-content');
const toTopBtn = document.querySelector('#goTop');
const mainMenu = document.querySelector('#menu-main-menu');


// Hide header & to top on scroll
window.onscroll = () => {
  hasScrolled();
  hideToTopBtn();
};


/* Toggle element from top or bottom
 * @param   {DOM element}   element     Target DOM element to toggle
 * @param   {string}        position    'top' or 'bottom'
 * @param   {string}        offset      Offset in e.g. pixels, rem, em, etc.
*/
const elementToggle = (element, position, offset) => position === 'top' ? element.style.top = offset : element.style.bottom = offset;


/* Change display attribute of element
 * @param   {DOM element}   element     Target DOM element
 * @param   {string}        value       Display attribute value, e.g. 'none', 'block', etc.
*/
const elementDisplay = (element, value) => element.style.display = value;


// Hide Header
let prevScrollpos = window.pageYOffset;

const hasScrolled = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    elementToggle(header, 'top', '0');
    elementDisplay(mainMenu, 'none');
  } else {
    elementToggle(header, 'top', '-80px');
    elementDisplay(mainMenu, 'none');
  }

  prevScrollpos = currentScrollPos;
}


// Hide "to top button"
const hideToTopBtn = () => {
  window.pageYOffset > window.screen.height ?
    elementToggle(toTopBtn, 'bottom', '10px')
    :
    elementToggle(toTopBtn, 'bottom', '-50px')
}


// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.main-menu ul').slideToggle(300, function () {
  });
});
