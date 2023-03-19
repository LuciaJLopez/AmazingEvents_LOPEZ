import data from "./amazing.js";
import {creatCards, createChecks,textFilter, categFilter} from "./functions.js";

let container = document.getElementById('cards');

creatCards(data.events,container)


//Crea categorias dinamicas

const checkContainer = document.getElementById('checkContainer');

//Crea las categorias de los checkbox

const containerCheck = document.getElementById('checkContainer')


createChecks(data.events);


//Funcion que busca por texto

const input = document.querySelector('.searchForm > input');

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

