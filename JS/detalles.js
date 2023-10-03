document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".containerDetalles");

  const datosMovies = JSON.parse(localStorage.getItem(`moviesPage`));

  console.log(datosMovies);

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
            <h4 class="lightItem">${showDetails.tvShow.name}</h4>
            <img class="imgPrincipal" src="${showDetails.tvShow.image_thumbnail_path}"/>
            <ul class="ulGeneros" id="ul-${showDetails.tvShow.id}"></ul>
            </div>
            <p class="col-lg-9 mt-5 lightItem ">${showDetails.tvShow.description}</p>
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
      console.log(imgContainer);

      showDetails.tvShow.pictures.forEach((image) => {
        console.log(image);
        const img = document.createElement("img");
        console.log(img);
        img.setAttribute("src", image);
        imgContainer.appendChild(img);
      });

      const ulGeneros = document.getElementById(`ul-${showDetails.tvShow.id}`);

      showDetails.tvShow.genres.forEach((genero) => {
        console.log(genero);
        const li = document.createElement("li");
        li.classList.add("lightItem")
        const liText = document.createTextNode(`${genero}`);
        li.appendChild(liText);
        console.log(li);

        ulGeneros.appendChild(li);
      });
    });
});

const showDetails = JSON.parse(
  localStorage.getItem(`moviesDescription${idPelicula}`)
);

console.log(showDetails);
