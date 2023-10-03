const darkModeEvent = document.querySelector(".div-riel");
darkModeEvent.addEventListener("click", darkMode);
darkModeEvent.addEventListener("click", swipe);

function darkMode() {
  document.body.classList.toggle("dark");

  const nav = document.querySelector(".nav");
  nav.classList.toggle("darkNav");

  const botonBuscar = document.getElementById("botonBuscar");
  botonBuscar.classList.toggle("darkButton");

  const botonBorde = document.getElementById("botonBorde");
  botonBorde.classList.toggle("darkButton");

  const cardDark = document.querySelectorAll(".card");

  cardDark.forEach((card) => {
    card.classList.toggle("darkCard");
  });

  const lightItem = document.querySelectorAll(".lightItem");
  lightItem.forEach((item) => {
    item.classList.toggle("darkItem");
  });

  if (document.body.classList.contains("dark")) {
    const darkModeIcon = document.querySelector(".bi-brightness-high-fill");

    darkModeIcon.classList.remove("bi-brightness-high-fill");

    darkModeIcon.classList.add("bi-moon-fill");

    const darkModeButton = document.querySelector("#button");

    darkModeButton.classList.add("buttonSun");
  } else {
    const darkModeIcon = document.querySelector(".bi-moon-fill");

    darkModeIcon.classList.remove("bi-moon-fill");

    darkModeIcon.classList.add("bi-brightness-high-fill");

    const darkModeButton = document.querySelector("#button");

    darkModeButton.classList.remove("buttonSun");
  }
}

function swipeDarkMode() {
  button.addEventListener("click", swipe());
}

let riel = document.querySelector(".div-riel");
let boton = document.querySelector("#button");

function swipe() {
  boton.classList.toggle("active");
  riel.classList.toggle("active");
}