// Toggle kelas aktif untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle kelas aktif untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Toggle kelas aktif untuk shopping cart

// Klik di luar elemen untuk menutup menu yang aktif
document.addEventListener("click", function (e) {
  // Tutup navbar jika klik di luar hamburger dan navbar
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Tutup search form jika klik di luar tombol dan form
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Tutup shopping cart jika klik di luar tombol dan cart
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});
