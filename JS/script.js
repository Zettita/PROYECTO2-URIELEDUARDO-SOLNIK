window.addEventListener("load", () => {
  // Creo una lista de objetos para luego agregar las series que busque con el input
  let series = [];
  // Hago un fetch para guardar en el localStorage el json
  fetch(`./JS/movies.json`)
    .then((response) => response.json())
    .then((datos) => {
      localStorage.setItem(`moviesPage`, JSON.stringify(datos));

      // traigo los datos del json a una constante
      const datosMovies = JSON.parse(localStorage.getItem(`moviesPage`));

      // ordeno las series por nombre
      datosMovies.tv_shows.sort((a, b) => {
        const peliculaA = a.name.toLowerCase();
        const peliculaB = b.name.toLowerCase();
        return peliculaA.localeCompare(peliculaB);
      });

      // Selecciono el container donde voy a crear las card con las peliculas
      const container = document.querySelector(".container");

      // si hay algo en la constante "datosMovies" creo la card de cada movie y la inserto en el container, tambien le agrego el evento al boton para ir al otro HTML con el id de cada pelicula
      if (datosMovies) {
        series = datosMovies.tv_shows.map((show) => {
          if (show.status == "Running") {
            const containerCard = document.createElement("article");
            containerCard.classList.add("containerCard");

            containerCard.innerHTML = `
                <article class="card">
                <img class="imgPrincipal" src="${show.image_thumbnail_path}">
                <div class="divName">
                <h4 class=" toggleItem tituloSerie">${show.name}</h4>
                <p class="text-success statusShow">En emision</p>
                </div>
                </article>
                <div class="positionButtonDiv">
                <div class="buttonDiv">
                <button class="botonVerMas inactive p-2" id="id-${show.id}"type="button">Ver mas</button>
                </div>
                </div>
                `;

            container.appendChild(containerCard);

            const boton = document.getElementById(`id-${show.id}`);

            boton.addEventListener("click", () => {
              mostrarDetalles(show);
            });
            return { name: show.name, element: containerCard };
          } else {
            const containerCard = document.createElement("article");
            containerCard.classList.add("containerCard");

            containerCard.innerHTML = `
                <article class="card">
                <img class="imgPrincipal" src="${show.image_thumbnail_path}">
                <div class="divName">
                <h4 class=" toggleItem tituloSerie">${show.name}</h4>
                <p class="text-danger statusShow">Finalizada</p>
                </div>
                </article>
                <div class="positionButtonDiv">
                <div class="buttonDiv">
                <button class="botonVerMas inactive p-2" id="id-${show.id}"type="button">Ver mas</button>
                </div>
                </div>
                
                `;

            container.appendChild(containerCard);

            const boton = document.getElementById(`id-${show.id}`);

            boton.addEventListener("click", () => {
              mostrarDetalles(show);
            });
            return { name: show.name, element: containerCard };
          }
        });
      }

      const inputBuscar = document.getElementById("inputNav");
      inputBuscar.addEventListener("input", (e) => {
        const valor = e.target.value.toLowerCase();
        console.log(valor);
        series.forEach((serie) => {
          const visible = serie.name.toLowerCase().includes(valor);
          serie.element.classList.toggle("oculto", !visible);
        });
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
            card.classList.add("darkCard");
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
  // por cada pelicula en "datosMovies" hago un fetch para traer con cada ID un objeto mas detallado de cada pelicula y lo guardo en el localStorage
});

// funcion para mostrar detalles en otro html
function mostrarDetalles(show) {
  window.location.href = `detalles.html?id=${show.id}`;
}
