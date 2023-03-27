//import data from "./amazing.js"
import {creatCards, pastEvents, createChecks, textFilter,categFilter} from "./functions.js";
const container = document.getElementById('cards');
async function inicial(){
  await fetch('./amazing.json')
  .then(response => response.json())
  .then(data => {
    creatCards(pastEvents(data),container)
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
//Create dynamic categories
const checkContainer = document.getElementById('checkContainer');
//Create checkbox categories
const containerCheck = document.getElementById('checkContainer');
//Function that searches by text
const input = document.querySelector('.searchForm > input');





