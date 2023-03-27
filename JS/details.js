//import data from "./amazing.js"

const detailContainer = document.querySelector("#cardDetail");

async function getEvents(){
  await fetch('./amazing.json')
      .then(response => response.json())
      .then(data => {

        let queryString = location.search;
        let params = new URLSearchParams(queryString);
        let cardsID = params.get("id");
        let event = data.events.find((e) => e._id == cardsID);

        drawCards(event, detailContainer)
        
      }).catch(err => console.error(err))
}

getEvents()

function drawCards(event, container){
  container.innerHTML=`
 <div class="card" style="width: 18rem;">        
 <img src="${event.image}" class="card-img-top" alt="${event.name}">
<div class="card-body">        <h5 class="card-title fw-bold">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text fw-bold">Date: ${event.date}</p>
        <p class="card-text fw-bold">Place: ${event.place}</p>
        <p class="card-text fw-bold">Category: ${event.category}</p>
      <h8 class="fw-bold">Price: $${event.price}</h8>
      </div>
</div>`;

}

