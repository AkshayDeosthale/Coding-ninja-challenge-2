//Using strict mode here to avoid errors
"use strict";
const movies = {
  Hero: {
    Title: "Rockwell Tools Bladerunner X2",
    Year: "2015",
    imdbID: "tt5855480",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzM5MTcxMTgtODAwNS00OWNmLWFlYzYtN2QzNzZiMTQzNGZhXkEyXkFqcGdeQXVyNTY2NTE2MzA@._V1_SX300.jpg",
  },

  Search: [
    {
      Title: "Last Action Hero",
      Year: "1993",
      imdbID: "tt0107362",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Looney Tunes: Back in Action",
      Year: "2003",
      imdbID: "tt0318155",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDc0NTc4YTMtOTRiYS00MzQ5LTg5MDAtYWMzZTM5MjljYWViXkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
    },
    {
      Title: "A Civil Action",
      Year: "1998",
      imdbID: "tt0120633",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "An Action Hero",
      Year: "2022",
      imdbID: "tt15600222",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
    },
    {
      Title: "Missing in Action",
      Year: "1984",
      imdbID: "tt0087727",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDczNDljZTUtNmZmZC00YzFkLWExYzEtYzQxNmNkNmFjMDQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Action Point",
      Year: "2018",
      imdbID: "tt6495770",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg",
    },
    {
      Title: "Action Jackson",
      Year: "1988",
      imdbID: "tt0094612",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjc0Y2E2ZjYtZGQxNi00NDgxLTk0OTctMDAzYTg1MzFmMjI4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    },
    {
      Title: "321 Action",
      Year: "2020",
      imdbID: "tt13423846",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRmYzgyZjEtN2UyZS00NDYxLTlkMDctMGJjZjY0ODExNWE5XkEyXkFqcGdeQXVyNjI2ODk3NTM@._V1_SX300.jpg",
    },
    {
      Title: "Missing in Action 2: The Beginning",
      Year: "1985",
      imdbID: "tt0089604",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTFhNTdiNDQtZGQ4Ny00MDA1LTg1ZjEtYzZhMGU5YjBjNTBhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Class Action",
      Year: "1991",
      imdbID: "tt0101590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWY5Mjk4ZmItMTAzYS00NWE3LWEzYzYtNDgzY2MwMzA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
  ],
  totalResults: "1262",
  Response: "True",
};

document.addEventListener("DOMContentLoaded", function () {
  //hero image
  const heroImage = document.getElementById("hero-image");
  const heroName = document.getElementById("hero-name");
  const heroYear = document.getElementById("hero-year");
  //movie list
  const listItemContainer = document.getElementById(
    "movie-list-item-container"
  );
  const listItemTemplate = document.getElementById("movie-list-item-template");

  function setHerodetails() {
    heroImage.src = movies.Hero.Poster;
    heroName.innerText = movies.Hero.Title;
    heroYear.innerText = movies.Hero.Year;
  }
  setHerodetails();

  //movie list
  function addList() {
    movies.Search.forEach((movie, index) => {
      const listItemClone = listItemTemplate.content.cloneNode(true);
      listItemClone.querySelector(".movie-title").textContent = movie.Title;
      listItemClone.querySelector(".movie-info").textContent = movie.Year;
      listItemClone.querySelector(".movie-poster").src = movie.Poster;
      listItemClone.getElementById("re-route").href = movie.imdbID;
      listItemClone.getElementById("re-route").target = "_blank";
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

  // Array to store favorite movies
  const favorites = [];

  // Function to add a movie to the favorites list
  function addToFavorites(movieTitle) {
    if (!favorites.includes(movieTitle)) {
      favorites.push(movieTitle);
      console.log(`${movieTitle} added to favorites.`);
    }
  }

  // Function to handle the heart icon click event
  function handleHeartClick(event) {
    console.log("i");
    const heartIcon = event.target;
    const movieTitle = heartIcon.dataset.movieTitle;

    addToFavorites(movieTitle);
  }

  // Get the movie items and add event listener to each heart icon
  const movieItems = document.querySelectorAll(".movie-list-item");

  movieItems.forEach((item) => {
    const heartIcon = item.querySelector(".bi-heart");
    const movieTitle = item.querySelector(".movie-title").textContent;

    heartIcon.addEventListener("click", handleHeartClick);
    heartIcon.setAttribute("data-movie-title", movieTitle);
  });

  document
    .getElementById("movie-filter")
    .addEventListener("input", filterMovies);

  addList();
});
