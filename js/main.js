var $clicked = $('.btn-show-hide');
var $move = $('.btn-move');
var $bounce = $('.btn-bounce');
var $compress = $('.btn-collapse-expand');
var $expand = $('.btn-append');
var $list = $('.list');

$clicked.on('click', function (e) {
  $('.box').toggleClass('box-show');
});

$move.on('click', function (e) {
  $('.diamond').toggleClass('diamond-move');
});

$compress.on('click', function (e) {
  $('.panel').toggleClass('panel-squish');
});

$bounce.on('click', function (e) {
  $('.circle').toggleClass('circle-bounce');
});

$expand.on('click', function (e) {
  var $li = $('<li>');

  $list.append($li);
  $li.addClass('words');
});
