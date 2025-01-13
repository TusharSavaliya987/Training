const API_KEY = "f1c53655a638c2d66122acdc0d45d534";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

let currentPage = 1;
let currentCategory = "popular";

// DOM Elements
const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const categoryButtons = document.querySelectorAll(".category-btn");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const currentPageSpan = document.getElementById("currentPage");
const modal = document.getElementById("movieModal");
const closeModal = document.querySelector(".close");

// Event Listeners
searchButton.addEventListener("click", handleSearch);
prevPageBtn.addEventListener("click", () => changePage(-1));
nextPageBtn.addEventListener("click", () => changePage(1));
categoryButtons.forEach((button) => {
  button.addEventListener("click", () =>
    changeCategory(button.dataset.category)
  );
});
closeModal.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Fetch movies from API
async function fetchMovies(category = "popular", page = 1, query = "") {
  try {
    let url;
    if (query) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    } else {
      url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
}

// Display movies in the grid
function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.onclick = () => showMovieDetails(movie.id);

    const posterPath = movie.poster_path
      ? IMAGE_BASE_URL + movie.poster_path
      : "https://via.placeholder.com/500x750?text=No+Poster";

    movieCard.innerHTML = `
            <img class="movie-poster" src="${posterPath}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <span class="movie-rating">★ ${movie.vote_average.toFixed(
                  1
                )}</span>
            </div>
        `;

    moviesContainer.appendChild(movieCard);
  });
}

// Handle search
async function handleSearch() {
  const query = searchInput.value.trim();
  if (query) {
    const data = await fetchMovies("", 1, query);
    if (data && data.results) {
      displayMovies(data.results);
      currentPage = 1;
      currentPageSpan.textContent = currentPage;
    }
  }
}

// Change page
async function changePage(delta) {
  const newPage = currentPage + delta;
  if (newPage < 1) return;

  const data = await fetchMovies(currentCategory, newPage);
  if (data && data.results) {
    displayMovies(data.results);
    currentPage = newPage;
    currentPageSpan.textContent = currentPage;
  }
}

// Change category
async function changeCategory(category) {
  currentCategory = category;
  currentPage = 1;
  currentPageSpan.textContent = currentPage;

  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  const data = await fetchMovies(category, currentPage);
  if (data && data.results) {
    displayMovies(data.results);
  }
}

// Show movie details
async function showMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const movie = await response.json();

    const movieDetails = document.getElementById("movieDetails");
    movieDetails.innerHTML = `
            <div class="movie-details">
                <img class="movie-poster-large" 
                     src="${IMAGE_BASE_URL + movie.poster_path}" 
                     alt="${movie.title}">
                <div class="movie-info-large">
                    <h2>${movie.title}</h2>
                    <p><strong>Release Date:</strong> ${movie.release_date}</p>
                    <p><strong>Rating:</strong> ★ ${movie.vote_average.toFixed(
                      1
                    )}</p>
                    <p><strong>Overview:</strong> ${movie.overview}</p>
                    <p><strong>Genres:</strong> ${movie.genres
                      .map((genre) => genre.name)
                      .join(", ")}</p>
                </div>
            </div>
        `;

    modal.style.display = "block";
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

// Initial load
async function init() {
  const data = await fetchMovies(currentCategory, currentPage);
  if (data && data.results) {
    displayMovies(data.results);
  }
}

init();
