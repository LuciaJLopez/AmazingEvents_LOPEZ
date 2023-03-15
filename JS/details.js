import data from "./amazing.js"

let detailContainer = document.querySelector("#cards");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardsID = params.get("id");
const event = data.events.find((event) => event._id == cardsID);

console.log(event);

function createDetails(event, container){
    let div = document.createElement('div')
    div.classList = 'col-md-8 '
    div.style = 'card-body'
    div.innerHTML = `<img src="${event.image}" class="card-img-top" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">
    ${event.description}
    </p>
    </div>`
    container.appendChild(div);
}

createDetails(evento, detailContainer);
