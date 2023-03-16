import data from "./amazing.js";
//import {pastEvents, futureEvents} from "./functions.js";

//console.log(pastEvents(data));
//console.log(futureEvents(data));

//let container = document.getElementById('past-cards')

//creatCards(pastEvents(data), container);

//--------------------------------------------

let container = document.getElementById('cards');

function homeEvents(){
  let arrayEvents = [];
  for (let i = 0; i < data.events.length; i++){
    arrayEvents.push(data.events[i]);
  } 
  return arrayEvents;
}

//console.log(homeEvents(data.events,container))

//Esto es para que me muestre las cards en home
let detailContainer = document.querySelector("#cardDetail")

function creatCards(array,container){
  let fragment = document.createDocumentFragment();
  container.innerHTML = '';
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


//Crea categorias dinamicas

const checkContainer = document.getElementById('checkContainer');

//Crea las categorias de los checkbox

const containerCheck = document.getElementById('checkContainer')

function createChecks(array) {
  let arrayCateg = array.map(event => event.category);
  let setCateg = new Set(arrayCateg)
  let arrChecks = Array.from(setCateg);
  let checkboxes = '';
  arrChecks.forEach(category => {
    checkboxes += `
      <div class="category d-flex flex-wrap justify-content-center" id="${category}" value="${category}">
        <div class="d-inline-flex p-2 flex-wrap">
          <div class="p-3 g-col-6 z-1">
            <input type="checkbox" name="${category}">
            <label>${category}</label>
          </div>
        </div>
      </div>`;
  });
  checkContainer.innerHTML = checkboxes;
}

createChecks(data.events);

//-------------------------------------------------------------------------------//
//Funcion que busca por texto

const input = document.querySelector('.searchForm > input');

function textFilter(array, name){
  //container.innerHTML = '';
  let arrFiltered = array.filter(elemento => elemento.name.toLowerCase().includes(name.toLowerCase()))
  return arrFiltered
  //creatCards(arrFiltered, container);
}

input.addEventListener('input',()=>{
  let textfiltered = textFilter(data.events, input.value);
  let categFiltered = categFilter(textfiltered)
  creatCards(categFiltered,container);
})


//funcion que filtra las categorias en checkboxes
function categFilter(eventosCateg){
  let checkboxes = document.querySelectorAll("input[type ='checkbox']")
  let arrChecks = Array.from(checkboxes)
  let arrChecksCateg = arrChecks.filter(check => check.checked)
  let arrChecksCategValues = arrChecksCateg.map(checkChecked => checkChecked.value)
  let arrFiltrado = eventosCateg.filter(elemento => arrChecksCategValues.includes(elemento.category))
  if (arrChecksCateg.length >0){
    return arrFiltrado;
  }
  return eventosCateg
}


containerCheck.addEventListener('change',()=>{
  let textfiltered = textFilter(data.events, input.value);
  let categFiltered = categFilter(textfiltered)
  creatCards(categFiltered, container);
})

