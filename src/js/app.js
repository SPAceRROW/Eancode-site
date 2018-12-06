import $ from 'jquery';


$(window).scroll(function() {
  if($(this).scrollTop() > 70) {
    $('.header').addClass('scroll');
  }
  else {
    $('.header').removeClass('scroll');
  }
});

$(document).ready(function() {
  // - - - - NUMBER - BEFORE - - - -
  var num = Number($('.what-need__block').length), i, str, elem;
  for (i = 1; i <= num; i++) {
    str = i;
    if (str < 10) {
      elem = '0'+i;
    } else {
      elem = i;
    }
    document.styleSheets[0].addRule('.what-need__block:nth-of-type('+i+')::before','content: "'+elem+'";');
  }
  // - - - - HAMBURGER - - - -
  $('.nav__button').click(function() {
    $('.header').toggleClass('active');
    $('.nav__button').toggleClass('active');
    $('.nav').toggleClass('active');
  });
});
