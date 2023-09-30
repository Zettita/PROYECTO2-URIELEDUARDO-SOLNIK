function darkMode() {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")){
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
    button.addEventListener('click', swipe());
}

let riel = document.querySelector(".div-riel")
let boton = document.querySelector("#button");

function swipe() {
    boton.classList.toggle("active");
    riel.classList.toggle("active");

}