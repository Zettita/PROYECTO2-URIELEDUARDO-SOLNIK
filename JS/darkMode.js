const divRiel = document.querySelector(".div-riel");
divRiel.addEventListener("click", darkMode);

function darkMode() {
  document.body.classList.toggle("dark");

  const boton = document.querySelector("#button");
  boton.classList.toggle("active");

  const darkModeIcon = document.querySelector("#iconMode");

  darkModeIcon.classList.toggle("bi-moon-fill");

  const nav = document.querySelector(".nav");
  nav.classList.toggle("darkNav");

  const cardDark = document.querySelectorAll(".card");
  cardDark.forEach((card) => {
    card.classList.toggle("darkCard");
  });

  const lightItem = document.querySelectorAll(".toggleItem");
  lightItem.forEach((item) => {
    item.classList.toggle("darkItem");
  });

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modoOscuro", "activo");
  } else {
    localStorage.setItem("modoOscuro", "inactivo");
  }
}
