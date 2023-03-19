import data from "./amazing.js"
import {creatCards, pastEvents, createChecks, textFilter,categFilter} from "./functions.js";

console.log(pastEvents(data))
let container = document.getElementById('cards');

creatCards(pastEvents(data),container)

//Crea categorias dinamicas

const checkContainer = document.getElementById('checkContainer');

//Crea las categorias de los checkbox

const containerCheck = document.getElementById('checkContainer')

createChecks(pastEvents(data),container);

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






