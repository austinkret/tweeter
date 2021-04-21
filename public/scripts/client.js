/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// TIME A GO FUNCTIONALITY
// $(document).read(function() {
//   timeago.render(document.querySelectorAll('.need_to_be_rendered'));
// });

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
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
    <span class="time-stamp" class="need_to_be_rendered" datetime="2016-07-07T09:24:17Z">${tweetData.created_at}</span>
    <div class=" icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
    </div>
  </footer>
</article>`;
  return $tweet;
};

const myTweet = createTweetElement(tweetData);

console.log(myTweet);
$(document).ready(function() {
  $("#tweets-container").append(myTweet);
});







// const renderTweets = function(tweets) {
//   for (let values in tweets) {
//     $('#tweets-container').append(createTweetElement(values));
//   }
// };
// renderTweets(tweetData);

