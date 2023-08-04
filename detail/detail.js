//Using strict mode here to avoid errors
"use strict";

let activeMovie = JSON.parse(window.localStorage.getItem("activemovie"));

document.addEventListener("DOMContentLoaded", function () {
  //hero image
  console.log(activeMovie);
  const heroImage = document.getElementById("movie-image");
  const heroName = document.getElementById("movie-title");
  const heroYear = document.getElementById("movie-type-year");

  function setCardDetails() {
    heroImage.src = activeMovie.Poster;
    heroName.innerText = activeMovie.Title;
    heroYear.innerText = activeMovie.Type + " ," + activeMovie.Year;
  }

  setCardDetails();
});
