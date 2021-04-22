
$(document).ready(function() {

  const body = document.querySelector('body');

  if (body.classList.contains('body-dark')) {
    $(".darkmode").click(function() { // darkmode for headline body, adds css styles on click
      $(".body-dark").toggleClass("body");
      $(".counter-dark").toggleClass("counter");
      $(".tweet-thread-dark").toggleClass("tweet-thread");
      $(".user-dark").toggleClass("user");
      $(".tweet-post-dark").toggleClass("tweet-post");
      $(".tweeterbutton-dark").toggleClass("tweeterbutton");
      $(".time-stamp-dark").toggleClass("time-stamp");
      $(".tweet-text-dark").toggleClass("tweet-text");
      $(".thread-container-dark").toggleClass("thread-container");
    });
  } else if (!body.classList.contains('body-dark')) {
    $(".darkmode").click(function() { // darkmode for headline body, adds css styles on click
      $("body").toggleClass("body-dark");
      $(".counter").toggleClass("counter-dark");
      $(".tweet-thread").toggleClass("tweet-thread-dark");
      $(".user").toggleClass("user-dark");
      $(".tweet-post").toggleClass("tweet-post-dark");
      $(".tweeterbutton").toggleClass("tweeterbutton-dark");
      $(".time-stamp").toggleClass("time-stamp-dark");
      $(".tweet-text").toggleClass("tweet-text-dark");
      $(".thread-container").toggleClass("thread-container-dark");
    });
  }
});