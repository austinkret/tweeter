$(document).ready(function() {
  console.log('ready!');
  // --- our code goes here ---
  $("#tweet-text").keyup(function() {
    const max = 140;
    let length = $(this).val().length;
    const counter = $(this).siblings("div").children("output");

    counter.html(max - length);
    
    if (length >= max) {
      return counter.addClass("max-limit");
    }
    return counter.removeClass('max-limit');
  });
});