define(['jquery'], function ($) {
  var my25 = {};
  my25.question = prompt();

  my25.confirm = confirm(my25.question +'?');
  return my25;
});