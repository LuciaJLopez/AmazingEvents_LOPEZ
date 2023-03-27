//import data from "./amazing.js"
import {creatCards,futureEvents,createChecks,textFilter,categFilter} from "./functions.js";

//console.log(futureEvents(data))

const container = document.getElementById('cards');

//--------------------------------------------------------------
//task4

async function inicial(){
  await fetch('./amazing.json')
  .then(response => response.json())
  .then(data => {
    creatCards(futureEvents(data),container)
    createChecks(data.events);
    //console.log(pastEvents(data))


    containerCheck.addEventListener('change',()=>{
      let textfiltered = textFilter(data.events, input.value);
      let categFiltered = categFilter(textfiltered)
      creatCards(categFiltered, container);
    })
    input.addEventListener('input',()=>{
      let textfiltered = textFilter(data.events, input.value);
      let categFiltered = categFilter(textfiltered)
      creatCards(categFiltered,container);
    })

  }).catch (err => console.error(err))
}
inicial();


//Crea categorias dinamicas

const checkContainer = document.getElementById('checkContainer');

//Crea las categorias de los checkbox

const containerCheck = document.getElementById('checkContainer')

//createChecks(futureEvents(data),container);

//Funcion que busca por texto

const input = document.querySelector('.searchForm > input');

//Busca texto

// input.addEventListener('input',()=>{
//   let textfiltered = textFilter(data.events, input.value);
//   let categFiltered = categFilter(textfiltered)
//   creatCards(categFiltered,container);
// })

//funcion que filtra las categorias en checkboxes

// containerCheck.addEventListener('change',()=>{
//   let textfiltered = textFilter(data.events, input.value);
//   let categFiltered = categFilter(textfiltered)
//   creatCards(categFiltered, container);
// })
