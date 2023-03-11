let home = "";
let cardContainer = document.getElementById("contenedor-articulos");

for (let eventos of data.events) {
    home += creacionTarjetas(eventos);
};
cardContainer.innerHTML = home;

// checkbox
// Creamos un array que contenga las categorias sin repetirlas.
let categorias = [];
data.events.forEach(evento => {
    if(!categorias.includes(evento.category)){
        categorias.push(evento.category);
    }
});
// dando vida a los inputs
let lasCategorias="";
let contenedorCheckbox = document.querySelector(".categoria");
for(ktegoria of categorias){
    lasCategorias += checkboxes(ktegoria);
}
contenedorCheckbox.innerHTML = lasCategorias;

let homeCheck = document.querySelectorAll(".form-check-input");
for(check of homeCheck){
    check.addEventListener("change",() =>{
        let chequeado = [];
    for(let tick of homeCheck){
        if(tick.checked){
            chequeado.push(tick.value)
        }
    }
    if(chequeado.length > 0){
        let cardContainer = "";
       let contenedorArticulos = document.getElementById("contenedor-articulos");
        data.events.filter(evento=>chequeado.includes(evento.category)).forEach(evento =>{
            cardContainer += creacionTarjetas(evento)
        });
        contenedorArticulos.innerHTML = cardContainer;
    }
});
};

//dando vida al buscador

let formBuscador = document.querySelector(".buscador");
let PalabraIngresada = document.getElementById("search");
formBuscador.addEventListener("submit",(evento)=> {
    evento.preventDefault();
    let search = PalabraIngresada.value.toLowerCase().trim();
    let resultad = busqueda(search,data.events);
    vistaDeResultados(resultad);  
     
});

// Combinacion de categorias y busqueda

function Filtrados(categoriasCheck, palabraKey){
    let eventosFiltrados = [];

    if((categoriasCheck.length > 0) && (palabraKey.length > 0)){
        eventosFiltrados = data.events.filter(evento => categoriasCheck.includes(evento.category)).filter(evento => evento.title.toLowerCase().includes(palabraKey) || evento.description.toLowerCase().includes(palabraKey));
    }
    else if (categoriasCheck.length > 0){
        eventosFiltrados = data.events.filter(evento => categoriasCheck.includes(evento.category));
    }
    else if (palabraKey.length > 0){
        eventosFiltrados = data.events.filter(evento => evento.title.toLowerCase().includes(palabraKey) || evento.description.toLowerCase().includes(palabraKey));
    } else{
        eventosFiltrados = data.events;
    }
    return eventosFiltrados;
}