import data from "./amazing.js"

const future_events = document.getElementById('future-cards')

function futureEvents(){
  let arrayfutureEvents = [];
  for (let i = 0; i < data.events.length; i++){
    if (data.events[i].date > data.currentDate){
      arrayfutureEvents.push(data.events[i]);
    }
  } 
  return arrayfutureEvents;
}

console.log(futureEvents(data.events,future_events))

function creatCards(array,contenedor){
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
contenedor.appendChild(fragment)
}
let array = futureEvents()
let card = creatCards(array,future_events)

