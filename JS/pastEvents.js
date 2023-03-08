import data from "./amazing.js"

//console.log(data)

const prueba = data.events;
console.table(prueba); //Esto hice para visualizar los datos, ya que, no sé por qué motivo no los puedo ver en consola.


function pastEvents(){
  let arraypastEvents = [];
  for (let i = 0; i < data.events.length; i++){
    if (data.events[i].date < data.currentDate){
      arraypastEvents.push(data.events[i]);
    }
  } return arraypastEvents;
}
console.log(pastEvents())

const past_events = document.getElementById('cards')
let fragment = new DocumentFragment();

let cards = ''


for(item of data){
    cards += `<div class="card p-3" style="width: 18rem;">
    <img src="./assets/Cinema.jpg" class="card-img-top" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
      <p class="card-text">
        ${item.description}
      </p>
    </div>
    <div class="botton"></div>
    <a class="btn btn-warning" href="./details.html" role="button">Details</a>
  </div>`
  fragment.appendChild(cards)
}
console.log(cards);
past_events.appendChild(fragment);
past_events.innerHTML = cards

