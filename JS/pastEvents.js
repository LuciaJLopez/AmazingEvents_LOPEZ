import data from "./amazing.js"
//import {pastEvents} from "./functions.js";

const container = document.getElementById('past-cards');

function pastEvents(){
  let arraypastEvents = [];
  for (let i = 0; i < data.events.length; i++){
    if (data.events[i].date > data.currentDate){
      arraypastEvents.push(data.events[i]);
    }
  } 
  return arraypastEvents;
}

console.log(pastEvents(data.events,container))

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
    <a class="btn btn-warning" href="./details.html" role="button">Details</a>
    </div>`
    fragment.appendChild(div)
    
  }
container.appendChild(fragment)
}

let array = pastEvents()
let card = creatCards(array,container)








