// formats the time at the top of the scheduler //
const currentDayContainer = document.getElementById('currentDay')
var now = moment().format('LLL');
currentDayContainer.innerText = now;


// workDay object //
let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

// Changes each time string into a number //
function hourNumberFromHourString(hourString) {
    switch(hourString) {
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
    }
}

for(var property in workDay) {
    let currentTime = moment().hour();

    let textClass = ".text" 
    $(textClass).text(workDay[property]);

    let timeClass = ".time"
    let timeString = $(timeClass).text();
    let timeNumber = hourNumberFromHourString(timeString);

    if(timeNumber < currentTime) {
        $(".text").addClass("past");
    } else if (timeNumber > currentTime) {
        $(".text").addClass("future");
    } else {
        $(".text").addClass("present");
    }
}

// pulls up workDay object when page loads //
$(document).ready(function(){
    if(!localStorage.getItem('workDay')) {
    updateNotes(workDay);
    } else {
    updateNotes(JSON.parse(localStorage.getItem('workDay')));
    }
})

$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
});

function loadCorrectDataset() {
    result = localStorage.getItem('workDay')
    return (result ? result : workDay);
}

function initializeLocalStorage() {
    localStorage.setItem('workDay', JSON.stringify(workDay));
};

function saveToLocalStorage(dayObj) {
    localStorage.setItem('workDay', JSON.stringify(dayObj));
}

function saveSchedule(hourString, val) {
    if(!localStorage.getItem('workDay')) {
    initializeLocalStorage();
    }

    let workHours = JSON.parse(localStorage.getItem('workDay'));
    workHours[hourString] = val

    saveToLocalStorage(workHours);
}

function updateNotes(dayObject) {
    $(".row").each(function(index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
    })
}
