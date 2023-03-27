const tbody1 = document.getElementById('tbody1');
const tbody2 = document.getElementById('tbody2');
async function inicial(){
  try{
    const response = await fetch('./amazing.json');
    const data = await response.json();
    let mostAttendedEvents = findMostAttendedEvents(data.events);
    let lowerAttendedEvents = findLowerAttendedEvents(data.events);
    let maxCapacityEvents = mostrarEventosMasCapacidad(data.events);
    // second table
    let futureEventsList = futureEvents(data);
    let revenuesForFutureEvents = calculateRevenuesForFutureEvents(futureEventsList);
    //third table
    let pastEventsList = pastEvents(data);
    let revenuesForPastEvents = calculateRevenuesForPastEvents(pastEventsList);
    //console.log(revenuesForPastEvents)
    let categories = countEventsByCategory(data.events);
    let percentagePastEvents = calculatePastAttendadedPercentageByCategory(data);
    let percentageFutureEvents = calculateFutureAttendadedPercentageByCategory(data);

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
//Function that returns the top three with the most attendance
function findMostAttendedEvents(events) {
  return events.sort((a, b) => {
    return b.assistance / b.capacity - a.assistance / a.capacity;
  }).slice(0, 3);
}
//Function that returns the top three with least assistance
function findLowerAttendedEvents(events) {
  return events.sort((a, b) => {
    return (a.assistance / a.capacity) - (b.assistance / b.capacity);
  }).slice(0, 3);
}
//Function that search the largest capacity
function mostrarEventosMasCapacidad(events) {
  return events.sort((a, b) => b.capacity - a.capacity).slice(0, 3);
}
//function to count events by category
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
//Function to calculate revenues in future events
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
//Function to calculate revenues in past events
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
//Function that shows the percentages by category of future events
function calculateFutureAttendadedPercentageByCategory(myData) {
  let futureEventsList = futureEvents(myData);
  let revenuesByCategory = calculateRevenuesForFutureEvents(futureEventsList);
  let percentageByCategoryFuture = {};
  revenuesByCategory.forEach(revenue => {
    let category = revenue.category;
    let totalAssistance = futureEventsList.filter(event => event.category === category)
      .reduce((total,event) => total + event.assistance, 0);
      console.log(totalAssistance)
    let capacity = futureEventsList.filter(event => event.category === category)
      .reduce((cap,event) => cap + event.capacity, 0);
    let percentage = (capacity !== 0) ? ((totalAssistance / capacity) * 100).toFixed(2) : 0;
    percentageByCategoryFuture[category] = percentage;
  });
  return percentageByCategoryFuture;
}
//Function that shows the percentages by category of past events
function calculatePastAttendadedPercentageByCategory(myData) {
  let pastEventsList = pastEvents(myData);
  let revenuesByCategory = calculateRevenuesForPastEvents(pastEventsList);
  let percentageByCategory = {};
  revenuesByCategory.forEach(revenue => {
    let category = revenue.category;
    let totalAssistance = pastEventsList.filter(event => event.category === category)
    .reduce((total,event) => total + event.assistance, 0);
    let capacity = pastEventsList.filter(event => event.category === category)
    .reduce((cap,event) => cap + event.capacity, 0);
    let percentage = ((totalAssistance / capacity) * 100).toFixed(2);
    percentageByCategory[category] = percentage;
  });
  return percentageByCategory;
}

