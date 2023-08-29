const navbarToggle = document.getElementById("mobile-menu");
const navbarList = document.getElementById("navbar-list");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

navbarToggle.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  // Aqui você pode implementar a lógica de pesquisa
});
