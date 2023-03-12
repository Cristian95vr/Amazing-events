let clickDetail = location.search;
let siguiente = new URLSearchParams(clickDetail);
let eventGuia = siguiente.get("id");
let evento = data.events.find(event => event._id == eventGuia);
let cardContainer = document.getElementById("tarjetaD")
let detalle =
`   <div class="tarjeta_detalle">      
 <div class="img_detalle">
                <img src="${evento.image}" alt="imagen">
            </div>
            <div class="detalle">
                <h2>${evento.name}</h2>
                <p>${evento.description}</p>
                <p>Category: ${evento.category}</p>
                <p>Date: ${evento.date}</p>
                <p>Place: ${evento.place}</p>
                <p>Capacity: ${evento.capacity}</p>
                <p></p>
                <p>prince: $${evento.price}</p>

            </div>
        </div>
      </div>  `;

        cardContainer.innerHTML = detalle;