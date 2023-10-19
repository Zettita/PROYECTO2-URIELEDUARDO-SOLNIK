window.addEventListener("load", () => {
  const container = document.querySelector(".containerDetalles");

  const datosMovies = JSON.parse(localStorage.getItem(`moviesPage`));

  const urlParams = new URLSearchParams(window.location.search);

  const idPelicula = parseInt(urlParams.get("id"));

  fetch(`https://www.episodate.com/api/show-details?q=${idPelicula}`)
    .then((response) => response.json())
    .then((datos) => {
      localStorage.setItem(`moviesDescription`, JSON.stringify(datos));

      const showDetails = JSON.parse(localStorage.getItem(`moviesDescription`));

      if (showDetails) {
        const card = document.createElement("div");
        card.classList.add("cardDetalles");
        card.innerHTML = `
            <div class="row">
            <div class="col-lg-auto ">
            <h4 class="toggleItem">${showDetails.tvShow.name}</h4>
            <img class="imgPrincipal" src="${showDetails.tvShow.image_thumbnail_path}"/>
            <ul class="ulGeneros" id="ul-${showDetails.tvShow.id}"></ul>
            </div>
            <p class="col-lg-9 mt-5 toggleItem ">${showDetails.tvShow.description}</p>
            </div>
            <div class="row">
            <div class="imgContainer col-sm-auto text-center" id="imgContainer${showDetails.tvShow.id}"></div>
            </div>
            `;
        container.appendChild(card);
      }

      const imgContainer = document.getElementById(
        `imgContainer${showDetails.tvShow.id}`
      );

      showDetails.tvShow.pictures.forEach((image) => {
        const img = document.createElement("img");
        img.setAttribute("src", image);
        imgContainer.appendChild(img);
      });

      const ulGeneros = document.getElementById(`ul-${showDetails.tvShow.id}`);

      showDetails.tvShow.genres.forEach((genero) => {
        const li = document.createElement("li");
        li.classList.add("toggleItem");
        const liText = document.createTextNode(`${genero}`);
        li.appendChild(liText);

        ulGeneros.appendChild(li);
      });
      const body = document.body;
      const modoOscuro = localStorage.getItem("modoOscuro") === "activo";

      const botonMode = document.querySelector("#button");
      console.log(botonMode);
      const nav = document.querySelector(".nav");
      const cards = document.querySelectorAll(".card");
      const darkModeIcon = document.querySelector("#iconMode");
      const darkModeButton = document.querySelector("#button");
      const lightItems = document.querySelectorAll(".toggleItem");
      if (modoOscuro) {
        body.classList.add("dark");

        darkModeButton.classList.add("active");
        darkModeIcon.classList.add("bi-moon-fill");

        if (darkModeButton.classList.contains("active")) {
          cards.forEach((card) => {
            card.classList.add("cardDark");
          });
        }

        nav.classList.add("darkNav");

        for (let item of lightItems) {
          item.classList.add("darkItem");
        }

        localStorage.setItem("modoOscuro", "activo");
      } else {
        body.classList.remove("dark");

        boton.classList.remove("active");

        darkModeIcon.classList.remove("bi-moon-fill");

        nav.classList.remove("darkNav");

        cards.forEach((card) => {
          card.classList.remove("darkCard");
        });

        lightItem.forEach((item) => {
          item.classList.remove("darkItem");
        });

        localStorage.setItem("modoOscuro", "inactivo");
      }
    });
});
