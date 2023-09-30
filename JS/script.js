document.addEventListener('DOMContentLoaded', () => {
   // Hago un fetch para guardar en el localStorage el json
    fetch(`./JS/movies.json`)
    .then(response => response.json())
    .then((datos) => {
    localStorage.setItem(`moviesPage`, JSON.stringify(datos));
    
// traigo los datos del json a una constante
    const datosMovies = JSON.parse(localStorage.getItem(`moviesPage`));
    console.log(datosMovies);
     
    

    
// Selecciono el container donde voy a crear las card con las peliculas
        const container = document.querySelector('.container');
        
        
// si hay algo en la constante "datosMovies" creo la card de cada movie y la inserto en el container, tambien le agrego el evento al boton para ir al otro HTML con el id de cada pelicula   
        if (datosMovies) {
            datosMovies.tv_shows.forEach((show) => {
                if(show.status == "Running"){

                const card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('bg-#f1f1f1')
                card.innerHTML = `
                <img class="imgPrincipal" src="${show.image_thumbnail_path}">
                <div class="divName">
                <h4 class="text-dark">${show.name}</h4>
                <p class="text-success statusShow">En emision</p>
                </div>
                <button class="botonVerMas bg-primary btn btn-outline-light p-2" id="id-${show.id}"type="button">Ver Mas</button>
                `
                
                container.appendChild(card);

                const boton = document.getElementById(`id-${show.id}`)

                boton.addEventListener('click', () => {
                mostrarDetalles(show);
           
            })
            } else{
                const card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('bg-#f1f1f1')
                card.innerHTML = `
                <img class="imgPrincipal" src="${show.image_thumbnail_path}">
                <div class="divName">
                <h4 class="text-dark">${show.name}</h4>
                <p class="text-danger statusShow">Finalizada</p>
                </div>
                <button class="botonVerMas bg-primary btn btn-outline-light p-2" id="id-${show.id}"type="button">Ver Mas</button>
                `
                
                container.appendChild(card);

                const boton = document.getElementById(`id-${show.id}`)

                boton.addEventListener('click', () => {
                mostrarDetalles(show);
           
            })  
            };
            })
            
        }
        
        
        
// por cada pelicula en "datosMovies" hago un fetch para traer con cada ID un objeto mas detallado de cada pelicula y lo guardo en el localStorage     
    });
   
});
// funcion para mostrar detalles en otro html
    function mostrarDetalles(show) {
        window.location.href = `detalles.html?id=${show.id}`;
    }

    

    