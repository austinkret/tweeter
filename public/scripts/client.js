/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// TIME A GO FUNCTIONALITY
// $(document).ready(function() {
//   timeago.render(document.querySelectorAll('.need_to_be_rendered'));
// });

const renderTweets = function(tweets) {
  for (let values of tweets) {
    $('#tweets-container').append(createTweetElement(values));
  }
};

const createTweetElement = function(tweetData) {
  const $tweet =
  `<article id="thread-container">
  <header class="tweet-thread">
    <div class="user">
      <img class="avatar-thread" src="${tweetData.user.avatars}">
      <span class="name">${tweetData.user.name}</span>
    </div>
    <span class="username">${tweetData.user.handle}</span>
  </header>
  <span class="tweet-post">${tweetData.content.text}</span>
  <footer>
    <span class="time-stamp" class="need_to_be_rendered" datetime="1473245023718">${tweetData.created_at}</span>
    <div class=" icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
    </div>
  </footer>
</article>`;
  return $tweet;
};

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    
    if (!$('#tweet-text').val()) {
      return alert("Well you gotta write something before you tweet!");
    }

    if ($('#tweet-text').val().length > 140) {
      return alert("You are a little over the character limit... Try again... But in less words.");
    }
    

    
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
    });
  });

  const loadTweets = function() {
    $.getJSON('/tweets', { method: 'GET'})
      .then(function(data) {
        renderTweets(data);
      })
      .catch(function(error) {
        console.log("We had trouble making your request due to an error: ", error);
      });
    };
    loadTweets();

});
