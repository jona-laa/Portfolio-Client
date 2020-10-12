// Hide header & to top on scroll
window.onscroll = () => {
  hideMenu();
  hideToTopBtn();
};



// Hide Header
let prevScrollpos = window.pageYOffset;

const hideMenu = () => {
  let currentScrollPos = window.pageYOffset;

  // if (screen.width < 813 && window.pageYOffset > 100) {
    if (prevScrollpos > currentScrollPos) {
      elementToggle(header, 'top', '0');
      elementDisplay(mainMenu, 'none');
    } else {
      elementToggle(header, 'top', '-80px');
      elementDisplay(mainMenu, 'none');
    }
  // }

  // Give header tint if scroll down screen height
  window.pageYOffset > window.screen.height - 300 ? header.style.background = 'rgba(0, 0, 0, 0.5)' : header.style.background = 'transparent';

  prevScrollpos = currentScrollPos;
}



// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.main-menu ul').slideToggle(300, function () {
  });
});
