let pastEvents = "";
let cardContainer = document.getElementById("contenedor-articulos");

let currentDate = new Date(data.currentDate);
for (let eventos of data.events) {
    let fechaEvento = new Date(eventos.date);
    if (fechaEvento < currentDate) {
        pastEvents += creacionTarjetas(eventos);
    };
};

cardContainer.innerHTML = pastEvents;