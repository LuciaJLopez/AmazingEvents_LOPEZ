 function pastEvents(myData){
    let arrayAux = [];
    //filter(nombreElemento => Condición de filtrado)
     arrayAux = myData.events.filter(myEvent => Date.parse(myEvent.date) < Date.parse(myData.currentDate));
     return arrayAux;
 }
function futureEvents(myData){
     let arrayAux = [];
     //filter(nombreElemento => Condición de filtrado)
     arrayAux = myData.events.filter(myEvent => Date.parse(myEvent.date) > Date.parse(myData.currentDate));
     return arrayAux;
 }
//Function to create cards
 function creatCards(array,container){
  container.innerHTML = '';
  let fragment = document.createDocumentFragment();
  array.forEach(item => {
    let div = document.createElement('div')
    div.classList = 'card p-3'
    div.style = 'width: 18rem;'
    div.innerHTML = `<img src="${item.image}" class="card-img-top" alt="cinema">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    </div>
    <div class="botton">
    <a class="btn btn-warning" href="./details.html?id=${item._id}" role="button">Details</a>
    </div>`
    fragment.appendChild(div)
  })
  container.appendChild(fragment)
}
//Funtion to create checkbox
function createChecks(array) {
  let arrayCateg = array.map(event => event.category);
  let setCateg = new Set(arrayCateg)
  let arrChecks = Array.from(setCateg);
  let checkboxes = '';
  arrChecks.forEach(category => {
    checkboxes += `
    <div class="d-inline-flex p-2 flex-wrap">
    <div class="p-3 g-col-6 z-1">
    <input type="checkbox" name="${category}" value="${category}">
    <label>${category}</label>
    </div>
    </div>
    `;
  });
  checkContainer.innerHTML = checkboxes;
}
//Function that searches by text
function textFilter(array, name){
  let arrFiltered = array.filter(elemento => elemento.name.toLowerCase().includes(name.toLowerCase()))
  return arrFiltered
}
//function that filters the categories in checkboxes
function categFilter(eventosCateg){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  let arrChecksCategValues = Array.from(checkboxes)
    .filter(check => check.checked)
    .map(checkChecked => checkChecked.value)
    console.log(arrChecksCategValues)
  if (arrChecksCategValues.length > 0){
    return eventosCateg.filter(elemento => arrChecksCategValues.includes(elemento.category))
  }
  return eventosCateg;
 
}
export {creatCards,pastEvents, futureEvents, createChecks, textFilter, categFilter};
