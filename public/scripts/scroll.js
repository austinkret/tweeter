// INTERSECTION OBERVER FUNCTION
$(document).ready(function() {

  const nav = document.querySelector("nav");
  const pageHeader = document.querySelector(".page-header");

  // MARGIN WHICH OBSERVED IS NOW 60PX OFF THE ACTUAL
  const pageHeaderOptions = {
    rootMargin: "-60px 0px 0px 0px"
  };

  // CREATE NEW INTERSECTION OBSERVER FUNCTION
  const pageHeaderObserver = new IntersectionObserver(function(entries) {
    // LOOP THROUGH THE ENTRIES
    entries.forEach(entry => {
      // IF THE PAGE HEADER IS NOT INTERSECTING ANYMORE, THE ADD THE NAV CLASS AND ADD THE AVATAR TO THE NAV
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        $('.mini-avatar').append('<img class="nav-avatar" src="/images/profile-hex.png">').hide().fadeIn();
      } else {
        // IF THE PAGE HEADER IS INTERSECTING AGAIN, REMOVE THE CLASS AND EMPTY THE AVATAR
        nav.classList.remove("nav-scrolled");
        $('.mini-avatar').empty().hide().fadeIn();
      }
    });
  },
  pageHeaderOptions);

  pageHeaderObserver.observe(pageHeader);

});