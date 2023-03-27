const tbody1 = document.getElementById('tbody1');
const tbody2 = document.getElementById('tbody2');

// async function inicial(){
//   await fetch('./amazing.json')
//   .then(response => response.json())
//   .then(data => {
//     const currentDate = data.currentDate;
//     const events = data.events;
//     let upcomingEvents = events.filter((event) => {
//       return event.date > currentDate;
//     })
//     insertData(events,tbody1)
//     groupByCategory(upcomingEvents, tbody1)
//     }).catch (err => console.error(err))
// }
// inicial();

// //funcion que obtiene el nombre de evento con mayor porcentaje de asistencia

// function findMostAttendedEvents(array){
//   let mostAttended = "";
//   let mostAttendedPercentage = -1;
//   array.forEach((event) => {
//     const percentage = ((event.assistance ? event.assistance : event.estimate)/ event.capacity) *100;
//     if (percentage > mostAttendedPercentage){
//       mostAttendedPercentage = percentage;
//       mostAttended = event.name;
//     }   
//   });
//   return mostAttended;
// }

// //funcion que obtiene de menor porcentage 
// function lowerAttendedEvents(array){
//   let lowestAttended = "";
//   let lowestAttendedPercentage = 101;
//   array.forEach((event) => {
//     const percentage = ((event.assistance ? event.assistance : event.estimate)/ event.capacity) *100;
//     if (percentage < lowestAttendedPercentage){
//       lowestAttendedPercentage = percentage;
//       lowestAttended = event.name;
//     }   
//   });
//   return lowestAttended;
// }

// //funcion de mayor capcidad
// function mostrarEventosMaxCapacity(events) {
//   return events.sort((a, b) => b.capacity - a.capacity).slice(0, 3);
// }


// //inserta la data 
// function insertData(array,container){
//   const tr = document.createElement('tr');
//   tr.innerHTML = `<td class="text-center">${findMostAttendedEvents(array)}</td>
//                   <td class="text-center">${lowerAttendedEvents(array)}</td>
//                   <td class="text-center">${mostrarEventosMaxCapacity(array)}</td>`
//   container.appendChild(tr)
// }

// //Funcion para calcular las ganancias
// function calculateRevenues(events){
//   let revenues =0;
//   events.forEach(event => {
//     const revenue = event.price * ((event.assistance ? event.assistance : event.estimate));
//     revenues += revenue;
//   });
//   return revenues;
// }

// //funcion para calcular el porcentaje de asistencia

// function calculateAttendadedPercentage(events){
//   let totalAssistance = events.reduce((total,event) => {
//     return total + ((event.assistance ? event.assistance : event.estimate));
//   },0);
//   let capacity = events.reduce((cap,event) => {
//     return cap + (event.capacity);
//   },0);
//   return ((totalAssistance / capacity) * 100).toFixed(2);
// }

// //funcion que crea la tabla

// function createTableRow(category, revenues, attendancePercentage, container){
//   const tr = document.createElement('tr');
//   tr.innerHTML =`<td>${category}</td>
//   <td>${revenues}</td>
//   <td>${attendancePercentage}</td>`;
//   container.appendChild(tr);

// }

// // funcion que agrupa por categoria

// function groupByCategory(array, container){
//   const groupCategories = [];
//   array.forEach((event) => {
//     if (!groupCategories[event.category]) {
//       groupCategories[event.category] = [];
//     }
//     groupCategories[event.category].push(event);
//   });
//   for (const category in groupCategories) {
//     let events = groupCategories[category];
//     let revenues = calculateRevenues(events);
//     createTableRow(category, revenues, attendancePct, container)
//   }
// }

async function inicial(){
  try{
    const response = await fetch('./amazing.json');
    const data = await response.json();
    const mostAttendedEvents = findMostAttendedEvents(data.events);
    const lowerAttendedEvents = findLowerAttendedEvents(data.events);
    const maxCapacityEvents = mostrarEventosMasCapacidad(data.events);
    // segunda tabla
    const futureEventsList = futureEvents(data);
    const revenuesForFutureEvents = calculateRevenuesForFutureEvents(futureEventsList);

    //tercer tabla
    const pastEventsList = pastEvents(data);
    console.log(pastEventsList)
    const revenuesForPastEvents = calculateRevenuesForPastEvents(pastEventsList);
    //console.log(revenuesForPastEvents)
    const categories = countEventsByCategory(data.events);

    const percentagePastEvents = calculatePastAttendadedPercentageByCategory(data);
    const percentageFutureEvents = calculateFutureAttendadedPercentageByCategory(data);


    mostAttendedEvents.forEach(event => {
      let tr = document.createElement('tr');
      let firstc = document.getElementById('first-column');
      tr.innerHTML=`<td>- ${event.name} </td>`;
      firstc.appendChild(tr);
    });
    
    lowerAttendedEvents.forEach(event => {
      let tr = document.createElement('tr');
      let secondc = document.getElementById('second-column');
      tr.innerHTML = `<td>- ${event.name}</td>`;
      secondc.appendChild(tr);
    })
    
    maxCapacityEvents.forEach(event => {
      let tr = document.createElement('tr');
      let thirdc = document.getElementById('third-column');
      tr.innerHTML = `<td>- ${event.name}</td>`;
      thirdc.appendChild(tr);
    })

    categories.forEach(category => {
      let tr = document.createElement('tr');
      let firstc2 = document.getElementById('first-column2');
      tr.innerHTML = `<td>${category.category}</td>`;
      firstc2.appendChild(tr);
    })
    revenuesForFutureEvents.forEach(category => {
      let tr = document.createElement('tr');
      let secondc2 = document.getElementById('second-column2');
      tr.innerHTML = `
        <td>$${category.revenue}</td>
      `;
      secondc2.appendChild(tr);
    })

    
    Object.keys(percentageFutureEvents).forEach(category => {
      let tr = document.createElement('tr');
      let thirdc2 = document.getElementById('third-column2');
      tr.innerHTML = `
        <td>${percentageFutureEvents[category]}%</td>
      `;
      thirdc2.appendChild(tr);
    });



    categories.forEach(category => {
      let tr = document.createElement('tr');
      let firstc3 = document.getElementById('first-column3');
      tr.innerHTML = `<td>${category.category}</td>`;
      firstc3.appendChild(tr);
    })
    revenuesForPastEvents.forEach(category => {
      let tr = document.createElement('tr');
      let secondc3 = document.getElementById('second-column3');
      tr.innerHTML = `
        <td>$${category.revenue}</td>
      `;
      secondc3.appendChild(tr);
    })

    Object.keys(percentagePastEvents).forEach(category => {
      let tr = document.createElement('tr');
      let thirdc3 = document.getElementById('third-column3');
      tr.innerHTML = `
        <td>${percentagePastEvents[category]}%</td>
      `;
      thirdc3.appendChild(tr);
    });

  }catch (error){
    console.log(error);
  } 
}

inicial();

//Function que devuelve los tres primeros con mayor asistencia
function findMostAttendedEvents(events) {
  return events.sort((a, b) => {
    return b.assistance / b.capacity - a.assistance / a.capacity;
  }).slice(0, 3);
}

//Function que devulve los tres primeros con menor asistencia
function findLowerAttendedEvents(events) {
  return events.sort((a, b) => {
    return (a.assistance / a.capacity) - (b.assistance / b.capacity);
  }).slice(0, 3);
}

//Function que busca la mayor capacidad
function mostrarEventosMasCapacidad(events) {
  return events.sort((a, b) => b.capacity - a.capacity).slice(0, 3);
}

//function para contar los eventos por categoría
function countEventsByCategory(events) {
  let categories = events.reduce((acc, event) => {
    if (acc[event.category]) {
      acc[event.category]++;
    } else {
      acc[event.category] = 1;
    }
    return acc;
  }, {});

  return Object.keys(categories).map(category => {
    return { category: category, count: categories[category] };
  });
}

//Funcion para calcular las ganancias
function calculateRevenuesForFutureEvents(events) {
  let revenuesByCategory = {};
  events.forEach(event => {
      if (!revenuesByCategory[event.category]) {
        revenuesByCategory[event.category] = 0;
      }
  const price = event.price;
  const assistance = event.assistance || event.estimate;
  const revenue = price * assistance;
  revenuesByCategory[event.category] += revenue;
  });
  return Object.keys(revenuesByCategory).map(category => {
      return { category: category, revenue: revenuesByCategory[category] };
  });
}

function futureEvents(myData){
  return myData.events.filter(myEvent => Date.parse(myEvent.date) > Date.parse(myData.currentDate));
}

function calculateRevenuesForPastEvents(events) {
  let revenuesByCategory = {};
  events.forEach(event => {
      if (!revenuesByCategory[event.category]) {
        revenuesByCategory[event.category] = 0;
      }
  const price = event.price;
  const assistance = event.assistance || event.estimate;
  const revenue = price * assistance;
  revenuesByCategory[event.category] += revenue;
  });
  return Object.keys(revenuesByCategory).map(category => {
      return { category: category, revenue: revenuesByCategory[category] };
  });
}

function pastEvents(myData){
  return myData.events.filter(myEvent => Date.parse(myEvent.date) < Date.parse(myData.currentDate));
}

function calculateFutureAttendadedPercentageByCategory(myData) {
  const futureEventsList = futureEvents(myData);
  const revenuesByCategory = calculateRevenuesForFutureEvents(futureEventsList);
  const percentageByCategoryFuture = {};
  revenuesByCategory.forEach(revenue => {
    const category = revenue.category;
    const totalAssistance = futureEventsList.filter(event => event.category === category)
      .reduce((total,event) => total + event.assistance, 0);
      console.log(totalAssistance)
    const capacity = futureEventsList.filter(event => event.category === category)
      .reduce((cap,event) => cap + event.capacity, 0);
    const percentage = (capacity !== 0) ? ((totalAssistance / capacity) * 100).toFixed(2) : 0;
    percentageByCategoryFuture[category] = percentage;
  });
  return percentageByCategoryFuture;
}

//Funcion que muestra los prcentajes por categoria de los eventos pasados
function calculatePastAttendadedPercentageByCategory(myData) {
  const pastEventsList = pastEvents(myData);
  const revenuesByCategory = calculateRevenuesForPastEvents(pastEventsList);
  const percentageByCategory = {};
  revenuesByCategory.forEach(revenue => {
    const category = revenue.category;
    const totalAssistance = pastEventsList.filter(event => event.category === category)
    .reduce((total,event) => total + event.assistance, 0);
    const capacity = pastEventsList.filter(event => event.category === category)
    .reduce((cap,event) => cap + event.capacity, 0);
    const percentage = ((totalAssistance / capacity) * 100).toFixed(2);
    percentageByCategory[category] = percentage;
  });
  
  return percentageByCategory;
}

