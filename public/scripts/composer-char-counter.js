$(document).ready(function() {
  console.log('ready!');
  // --- our code goes here ---
  $("#tweet-text").keyup(function() {
    const max = 140;
    let length = $(this).val().length;
    const counter = $(this).closest('.new-tweet').find(".counter");

    counter.html(max - length);
  });
});

$(".counter").change()