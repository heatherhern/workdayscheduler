const currentDayContainer = document.getElementById('currentDay')
var now = moment().format('LLL');

currentDayContainer.innerText = now;