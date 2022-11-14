// Get Elements
let share = document.getElementById("share");
let social = document.querySelector(".social");
let arrow = document.querySelector(".arrow");
let links = document.querySelector(".links");
let michelle = document.querySelector(".person");

// cloning Social to add it in the mobile version
let clonedSocial = social.cloneNode(true);
links.prepend(clonedSocial);
clonedSocial.classList = "cloned";
clonedSocial.classList.remove("social");

share.addEventListener("click", () => {
  social.classList.toggle("active");
  arrow.classList.toggle("active");
  links.classList.toggle("active");
  clonedSocial.classList.toggle("active");
  michelle.classList.toggle("active");
});
