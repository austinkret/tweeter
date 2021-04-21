/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// TIME A GO FUNCTIONALITY
$(document).ready(function() {
  timeago.render(document.querySelectorAll('.need_to_be_rendered'));
});

const tweetData = [
  {
    "user": {
      "name": "Samuel McIntosh",
      "avatars": "https://i.imgur.com/zxkZZtn.png"
      ,
      "handle": "@SamMaccy"
    },
    "content": {
      "text": "I really hate the idea of a European Super League. #MUFC"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Elina Underwood",
      "avatars": "https://i.imgur.com/t9Ay1Ab.png",
      "handle": "@EUnderTheRainbow" },
    "content": {
      "text": "Netflix be like 'we know exactly what movie you talkin bout but we ain’t got it lol.'"
    },
    "created_at": 1461113959088
  }
];

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
  renderTweets(tweetData);
});









