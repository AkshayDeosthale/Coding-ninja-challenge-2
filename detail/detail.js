//Using strict mode here to avoid errors
"use strict";

let storage = JSON.parse(window.localStorage.getItem("activemovie"));

async function fetchByID() {
  const res = await fetch(
    `http://www.omdbapi.com/?i=${storage.imdbID}&apikey=e6b3e4b6`
  );
  const resjson = await res.json();
  return resjson;
}

document.addEventListener("DOMContentLoaded", async function () {
  const activeMovie = await fetchByID();
  //hero image
  const heroImage = document.getElementById("movie-image");
  const heroName = document.getElementById("movie-title");
  const heroYear = document.getElementById("movie-type-year");
  const plotHero = document.getElementById("plot");

  const languageHero = document.getElementById("language");
  const actorHero = document.getElementById("actors");

  function setCardDetails() {
    heroImage.src = activeMovie.Poster;
    heroName.innerText = activeMovie.Title;
    heroYear.innerText = activeMovie.Genre + " ," + activeMovie.Year;
    plotHero.innerText = activeMovie.Plot;

    languageHero.innerText = activeMovie.Language;
    actorHero.innerText = activeMovie.Actors;
  }

  setCardDetails();
  const backbtn = document.getElementById("back");
  backbtn.addEventListener("click", function () {
    window.location.href = "/";
  });
});
