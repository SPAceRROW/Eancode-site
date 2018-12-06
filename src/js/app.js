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
  $('.nav__button').click(function() {
    $('.header').toggleClass('active');
    $('.nav__button').toggleClass('active');
    $('.nav').toggleClass('active');
  });
});
