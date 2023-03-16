/*
function pastEvents(myData){
    let arrayAux = [];
    //filter(nombreElemento => Consicion de filtrado)
    arrayAux = myData.events.filter(myEvent => Date.parse(myEvent.date) < Date.parse(myData.currentDate));
    return arrayAux;
}

function futureEvents(myData){
    let arrayAux = [];
    //filter(nombreElemento => Consicion de filtrado)
    arrayAux = myData.events.filter(myEvent => Date.parse(myEvent.date) > Date.parse(myData.currentDate));
    return arrayAux;
}

export function creatCards(array,container){
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

export {pastEvents, futureEvents};

*/
