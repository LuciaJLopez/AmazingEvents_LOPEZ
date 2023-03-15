import data from "./amazing.js"

let detailContainer = document.querySelector("#cards");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardsID = params.get("id");
const event = data.events.find((event) => event._id == cardsID);

console.log(event);

cardDetail.innerHTML = `
  <div class="d-flex flex-column align-items-center justify-content-center">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body d-flex flex-column align-items-center justify-content-center">
      <h5 class="card-title fw-bold">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class="card-text">Date: ${event.date}</p>
      <p class="card-text">Place: ${event.place}</p>
      <h8>Price: ${event.price}</h8>
    </div>
  </div>
`;


/*
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

createDetails(event, detailContainer);
*/
