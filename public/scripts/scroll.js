$(document).ready(function() {

  const nav = document.querySelector("nav");
  const sectionOne = document.querySelector(".page-header");

  const sectionOneOptions = {
    rootMargin: "-60px 0px 0px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
      console.log(entry.target);
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        $('.mini-avatar').append('<img class="nav-avatar" src="/images/profile-hex.png">').hide().fadeIn();
      } else {
        nav.classList.remove("nav-scrolled");
        $('.mini-avatar').empty().hide().fadeIn();
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);

});