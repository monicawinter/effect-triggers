var $clicked = $('.btn-show-hide');
var $move = $('.btn-move');

$clicked.on('click', function (e) {
  $('.box').toggleClass('box-show');
});

$move.on('click', function (e) {
  $('.diamond').toggleClass('diamond-move');
});
