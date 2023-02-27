let home = "";
let cardContainer = document.getElementById("contenedor-articulos");

for (let eventos of data.events) {
    home += creacionTarjetas(eventos);
};
cardContainer.innerHTML = home;