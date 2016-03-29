var $clicked = $('.btn-show-hide');

$clicked.on('click', function (e) {
  $('.box').toggleClass('box-show');
});
