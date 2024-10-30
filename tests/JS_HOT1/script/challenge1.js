const favoriteMovies = ["Inglorious Bastards", "Django Unchained", "Fantastic Mr.Fox"];

function displayMovies(){
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  for (let i = 0; i <favoriteMovies.length; i++){
    const li = document.createElement("li");
    li.textContent = favoriteMovies[i];
    movieList.appendChild(li);
  }
}
function addMovie() {
  const movieInput = document.getElementById("movie-input").value;
  if (movieInput) {
    favoriteMovies.push(movieInput);
    displayMovies();
    document.getElementById("movie-input").value = "";
  }
  else {
    alert("Please enter a movie name.");
  }
}
displayMovies();