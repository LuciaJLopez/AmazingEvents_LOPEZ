import data from "./amazing.js"

let detailContainer = document.querySelector("#cardDetail");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardsID = params.get("id");
const event = data.events.find((event) => event._id == cardsID);

console.log(event);

cardDetail.innerHTML=`
 <div class="card" style="width: 18rem;">        
 <img src="${event.image}" class="card-img-top" alt="${event.name}">
<div class="card-body">        <h5 class="card-title fw-bold">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text fw-bold">Date: ${event.date}</p>
        <p class="card-text fw-bold">Place: ${event.place}</p>
      <h8 class="fw-bold">Price: ${event.price}</h8>
      </div>
</div>`;


