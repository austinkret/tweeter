
// FUNCTIONALITY TO TOGGLE CLASSES BETWEEN DARK MODE AND STANDARD MODE

$(document).ready(function() {
  const body = document.querySelector('body');

  //CONDITION IF THE BODY TAG CONTAINS THE CLASS BODY-DARK, TOGGLE THE TARGETED CLASS WITH THE NORMAL CLASS
  if (body.classList.contains('body-dark')) {
    // WHEN DARK MODE BUTTON IS CLICKED
    $(".darkmode").click(function() {
      $(".body-dark").toggleClass("body");
      $(".counter-dark").toggleClass("counter");
      $(".tweet-header-dark").toggleClass("tweet-header");
      $(".user-dark").toggleClass("user");
      $(".tweet-post-dark").toggleClass("tweet-post");
      $(".tweeterbutton-dark").toggleClass("tweeterbutton");
      $(".time-stamp-dark").toggleClass("time-stamp");
      $(".tweet-input-dark").toggleClass("tweet-input");
      $(".thread-container-dark").toggleClass("thread-container");


    });

    //IF THE BODY DOES NOT HAVE THE BODY DARK CLASS THEN TARGET THE CLASS AND ADD THE DARK CLASS
  } else {
    // WHEN DARK MODE BUTTON IS CLICKED
    $(".darkmode").click(function() {
      $("body").toggleClass("body-dark");
      $(".counter").toggleClass("counter-dark");
      $(".tweet-header").toggleClass("tweet-header-dark");
      $(".user").toggleClass("user-dark");
      $(".tweet-post").toggleClass("tweet-post-dark");
      $(".tweeterbutton").toggleClass("tweeterbutton-dark");
      $(".time-stamp").toggleClass("time-stamp-dark");
      $(".tweet-input").toggleClass("tweet-input-dark");
      $(".thread-container").toggleClass("thread-container-dark");
    });
  }
});