// On form send click
const sendClick = (e) => {
  e.preventDefault();
  alert('This just a dummy site, Bud. Have a nice day! :)');
}

//Smooth scrolling
$('#menu-main-menu a, .btn, .arrow-link').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 150,
    },
      800
    );
  }
});
