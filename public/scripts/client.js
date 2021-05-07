/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// DOCUMENT READY CALL
$(document).ready(function() {

  // PREVENT UNWANTED CROSS-SITE SCRIPTING
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // CREATE TWEET FUNCTION
  const createTweetElement = function(tweetData) {
    const body = document.querySelector('body');

    if (!body.classList.contains('body-dark')) {
      const $tweet =
  `<article class="thread-container">
  <header class="tweet-header">
    <div class="user">
      <img class="avatar-thread" src="${tweetData.user.avatars}">
      <span class="name">${tweetData.user.name}</span>
    </div>
    <span class="username">${tweetData.user.handle}</span>
  </header>
  <span class="tweet-post">${escape(tweetData.content.text)}</span>
  <footer>
    <span class="time-stamp" class="need_to_be_rendered" datetime="1473245023718">${timeago.format(tweetData.created_at)}</span>
    <div class=" icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`;
      return $tweet;
    } else {
      const $tweet =
      `<article class="thread-container thread-container-dark">
      <header class="tweet-header tweet-header-dark">
        <div class="user user-dark">
          <img class="avatar-thread" src="${tweetData.user.avatars}">
          <span class="name">${tweetData.user.name}</span>
        </div>
        <span class="username">${tweetData.user.handle}</span>
      </header>
      <span class="tweet-post tweet-post-dark">${escape(tweetData.content.text)}</span>
      <footer>
        <span class="time-stamp time-stamp-dark" class="need_to_be_rendered" datetime="1473245023718">${timeago.format(tweetData.created_at)}</span>
        <div class=" icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
        </div>
      </footer>
    </article>`;
      return $tweet;
    }
  };

  // RENDER TWEETS FUNCTION
  const renderTweets = function(tweets) {
    for (let values of tweets) {
      $('#tweets-container').prepend(createTweetElement(values));
    }
  };

  // LOAD TWEETS FUNCTION
  const loadTweets = function() {
    $.getJSON('/tweets', { method: 'GET'})
      .done(function(data) {
        renderTweets(data);
      })
      .fail(function(error) {
        console.log("We had trouble making your request due to an error: ", error);
      });
  };

  loadTweets();

  //LOAD NEW TWEETS
  const loadNewTweets = function() {
    $.getJSON('/tweets', { method: 'GET'})
      .then((data) => {
        $('#tweets-container').prepend(createTweetElement(data[data.length - 1]));
      }).fail(function(error) {
        console.log("We had trouble making your request due to an error: ", error);
      });
  };
  // ON SUBMIT OF THE FORM FUNCTION
  $('form').on('submit', function(event) {3
    event.preventDefault();
    // ENSURE EMPTY WARNING CLASS
    $('.warning').empty();

    // IF THE CHARACTER LENGTH EXCEEDS 140, APPEND WARNING LABEL
    if ($('.tweet-input').val().length > 140) {
      return $('.warning').append('<span class="warning"><i class="fas fa-exclamation-triangle"></i>You are a little over the character limit... Try again... But in less words.</span>').hide().fadeIn();
    }

    // IF THERE INPUT IS EMPTY, APPEND WARNING CLASS
    if (!$('.tweet-input').val().length) {
      return $('.warning').append('<span class="warning"><i class="fas fa-exclamation-triangle"></i>Well you gotta write something before you hit tweet!</span>').hide().fadeIn();
    }

    // AJAX CALL TO SUBMIT THE TWEET INTO THE THREAD BELOW WITHOUT REFRESH
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
    }).then(function() {
      // GETJSON AS THE INPUT VALUE WILL BE A JSON ELEMENT
      $.getJSON('/tweets', { method: 'GET'})
        .done(function() {
          // WHEN DONE, LOAD TWEETS
          loadNewTweets();
          // RESET THE FORM TO EMPTY SO USER CAN TWEET AGAIN WITHOUT HAVING TO MANUALLY CLEAR THE FORM
          $('form')[0].reset();
          // RESET THE COUNTER TO 140
          $(".counter").text(140);
          // APPEND A SUCCESS MESSAGE SO USER KNOWS THEIR TWEET WAS SUCCESSFUL
          return $('.warning').append('<span class="success"><i class="fas fa-check-circle"></i>Success! Look below for your tweet!</span>').hide().fadeIn();
        });
      // IF FAIL, DISPLAY MESSAGE ALONG WITH THE ERROR
    }).fail(function(error) {
      console.log("We had trouble making your request due to an error: ", error);
    });
  });
  


});