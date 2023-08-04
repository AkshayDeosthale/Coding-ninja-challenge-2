//Using strict mode here to avoid errors
"use strict";

let likedMovies = JSON.parse(window.localStorage.getItem("likedMovies")) || [];

let movies;

async function fetchHeroData() {
  const herores = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=e6b3e4b6"
  );
  const heroresJSON = await herores.json();

  return heroresJSON;
}

async function fetchMovies(seachString = "action") {
  const res = await fetch(
    `http://www.omdbapi.com/?s=${seachString}&apikey=e6b3e4b6`
  );
  const resJSON = await res.json();
  return resJSON.Search;
}

document.addEventListener("DOMContentLoaded", async function () {
  const hero = await fetchHeroData();
  const list = await fetchMovies();

  movies = { Search: list, Hero: hero };

  //hero image
  const heroImage = document.getElementById("hero-image");
  const heroName = document.getElementById("hero-name");
  const heroYear = document.getElementById("hero-year");
  const explore = document.getElementById("explore-hero");
  const likeHero = document.getElementById("like-hero");
  const plotHero = document.getElementById("plot");
  const genreHero = document.getElementById("genre");

  //page header
  const headerLikeTemplate = document.getElementById("header-liked");
  const HeaderLikedContainer = document.getElementById(
    "header-liked-container"
  );
  function addHeaderLiked() {
    let list = [];

    movies.Search.forEach((mov) => {
      if (likedMovies.includes(mov.imdbID)) {
        list.push(mov);
      }
    });

    list.forEach((movie, index) => {
      const headerLikedList = headerLikeTemplate.content.cloneNode(true);

      headerLikedList.getElementById("index-number").innerText = index + 1;
      headerLikedList.querySelector(".movie-title").textContent = movie.Title;
      headerLikedList.querySelector(".movie-info").textContent = movie.Year;
      headerLikedList.querySelector(".movie-poster").src = movie.Poster;

      // headerLikedList.querySelector(".dropdown-item").textContent = movie.Title;
      // headerLikedList.querySelector(".dropdown-item").src = movie.Poster;

      const likeButton = headerLikedList.getElementById("like-button");
      likeButton?.addEventListener("click", function (event) {
        const indexToRemove = likedMovies.indexOf(movie.imdbID);

        if (indexToRemove !== -1) {
          likedMovies.splice(indexToRemove, 1);
        } else {
          likedMovies.push(movie.imdbID);
        }

        window.localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
        location.reload();
      });

      //reroute button
      let newHref = `/detail?id=${movie.imdbID}`;
      const linkElement = headerLikedList.getElementById(
        "header-like-list-item"
      );
      linkElement.addEventListener("click", function (event) {
        event.preventDefault();
        window.localStorage.setItem("activemovie", JSON.stringify(movie));
        window.location.href = newHref;
      });

      HeaderLikedContainer.appendChild(headerLikedList);
    });
  }

  //movie hero
  const listItemContainer = document.getElementById(
    "movie-list-item-container"
  );
  const listItemTemplate = document.getElementById("movie-list-item-template");

  function setHerodetails() {
    heroImage.src = movies.Hero.Poster;
    heroName.innerText = movies.Hero.Title;
    heroYear.innerText = movies.Hero.Year;
    plotHero.innerText = movies.Hero.Plot;
    genreHero.innerText = movies.Hero.Genre;
  }

  setHerodetails();

  //movie list
  function addList() {
    movies.Search.forEach((movie, index) => {
      const listItemClone = listItemTemplate.content.cloneNode(true);
      listItemClone.getElementById("index-number").innerText = index + 1;
      listItemClone.querySelector(".movie-title").textContent = movie.Title;
      listItemClone.querySelector(".movie-info").textContent = movie.Year;
      listItemClone.querySelector(".movie-poster").src = movie.Poster;

      //like button
      const likeButton = listItemClone.getElementById("like-button");
      likeButton.addEventListener("click", function (event) {
        event.preventDefault();
        const indexToRemove = likedMovies.indexOf(movie.imdbID);

        if (indexToRemove !== -1) {
          likedMovies.splice(indexToRemove, 1);
        } else {
          likedMovies.push(movie.imdbID);
        }

        window.localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
        location.reload();
      });

      //reroute button
      let newHref = `/detail?id=${movie.imdbID}`;
      const linkElement = listItemClone.getElementById("re-route");
      linkElement.addEventListener("click", function (event) {
        event.preventDefault();
        window.localStorage.setItem("activemovie", JSON.stringify(movie));
        window.location.href = newHref;
      });

      listItemContainer.appendChild(listItemClone);
    });
  }

  function filterMovies() {
    const filterInput = document.getElementById("movie-filter");
    const movieItems = document.querySelectorAll(".movie-list-item");

    const filterValue = filterInput.value.toLowerCase();

    movieItems.forEach((item) => {
      const movieTitle = item
        .querySelector(".movie-title")
        .textContent.toLowerCase();

      if (movieTitle.includes(filterValue)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  //click events for hero section
  explore.addEventListener("click", function (event) {
    event.preventDefault();
    window.localStorage.setItem("activemovie", JSON.stringify(movies.Hero));
    window.location.href = "/detail/";
  });

  likeHero.addEventListener("click", function (event) {
    event.preventDefault();
    window.localStorage.setItem(
      "likedMovies",
      JSON.stringify([...favourites, movie])
    );
  });

  document
    .getElementById("movie-filter")
    .addEventListener("input", filterMovies);
  addHeaderLiked();
  addList();
});
