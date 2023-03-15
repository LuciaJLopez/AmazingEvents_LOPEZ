import data from "./amazing.js";
//import {pastEvents, futureEvents} from "./functions.js";

//console.log(pastEvents(data));
//console.log(futureEvents(data));

//let container = document.getElementById('past-cards')

//creatCards(pastEvents(data), container);

//--------------------------------------------

const container = document.getElementById('cards');

function homeEvents(){
  let arraypastEvents = [];
  for (let i = 0; i < data.events.length; i++){
    arraypastEvents.push(data.events[i]);
  } 
  return arraypastEvents;
}

//console.log(homeEvents(data.events,container))

let detailContainer = document.querySelector("#cardDetail")

function creatCards(array,container){
  let fragment = document.createDocumentFragment();
  
  for(let item of array){
    let div = document.createElement('div')
    div.classList = 'card p-3'
    div.style = 'width: 18rem;'
    div.innerHTML = `<img src="${item.image}" class="card-img-top" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">
    ${item.description}
    </p>
    </div>
    <div class="botton">
    <a class="btn btn-warning" href="./details.html?id=${item._id}" role="button">Details</a>
    </div>`
    fragment.appendChild(div)
    
  }
container.appendChild(fragment)
}

let array = homeEvents()
let card = creatCards(array,container)

//----------------------------------------------------------
//Funcion search
/*
// Obtener el valor del input de búsqueda del usuario
const searchTerm = document.getElementById('search').value.toLowerCase();

// Filtrar los eventos cuyo nombre incluya el valor de búsqueda
const searchResults = data.events.filter(event => {
  return event.name.toLowerCase().includes(searchTerm);
});

// Mostrar los resultados de la búsqueda en la página
const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = '';

if (searchResults.length > 0) {
  searchResults.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.innerHTML = `
      <img src="${event.image}" alt="${event.name}">
      <h2>${event.name}</h2>
      <p>${event.description}</p>
      <p>${event.date}</p>
    `;
    resultsContainer.appendChild(eventDiv);
  });
} else {
  resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
}
*/