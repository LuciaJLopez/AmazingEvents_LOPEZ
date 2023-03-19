import data from "./amazing.js"
import {creatCards,futureEvents,createChecks,textFilter,categFilter} from "./functions.js";

console.log(futureEvents(data))

let container = document.getElementById('cards');
creatCards(futureEvents(data),container)

//Crea categorias dinamicas

const checkContainer = document.getElementById('checkContainer');

//Crea las categorias de los checkbox

const containerCheck = document.getElementById('checkContainer')

createChecks(futureEvents(data),container);

//Funcion que busca por texto

const input = document.querySelector('.searchForm > input');

//Busca texto

input.addEventListener('input',()=>{
  let textfiltered = textFilter(data.events, input.value);
  let categFiltered = categFilter(textfiltered)
  creatCards(categFiltered,container);
})

//funcion que filtra las categorias en checkboxes

containerCheck.addEventListener('change',()=>{
  let textfiltered = textFilter(data.events, input.value);
  let categFiltered = categFilter(textfiltered)
  creatCards(categFiltered, container);
})
