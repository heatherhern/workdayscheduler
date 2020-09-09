// formats the time at the top of the scheduler //
const currentDayContainer = document.getElementById('currentDay')
var now = moment().format('LLL');
currentDayContainer.innerText = now;

let currentTime = moment().hour();
// currentTime = 12;


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

// pulls up workDay object when page loads //
function myCalendar(){
    $(document).ready(function(){
        if(!localStorage.getItem('workDay')) {
        updateNotes(workDay);
        } else {
        updateNotes(JSON.parse(localStorage.getItem('workDay')));
        }
    })
    }


    // created if/else if statements for all three possibilities in each hour //
    if (currentTime > 8){
        $("#text-area-1").addClass("past");
    } else if (currentTime >= 8 && currentTime < 9) {
        $("#text-area-1").addClass("present");
    } else if (currentTime < 8) {
        $("#text-area-1").addClass("future");
    }

    if (currentTime > 9){
        $("#text-area-2").addClass("past");
    } else if (currentTime >= 9 && currentTime < 10) {
        $("#text-area-2").addClass("present");
    } else if (currentTime < 9) {
        $("#text-area-2").addClass("future");
    }

    if (currentTime > 10){
        $("#text-area-3").addClass("past");
    } else if (currentTime >= 10 && currentTime < 11) {
        $("#text-area-3").addClass("present");
    } else if (currentTime < 10) {
        $("#text-area-3").addClass("future");
    }

    if (currentTime > 11){
        $("#text-area-4").addClass("past");
    } else if (currentTime >= 11 && currentTime < 12) {
        $("#text-area-4").addClass("present");
    } else if (currentTime < 11) {
        $("#text-area-4").addClass("future");
    }

    if (currentTime > 12){
        $("#text-area-5").addClass("past");
    } else if (currentTime >= 12 && currentTime < 13) {
        $("#text-area-5").addClass("present");
    } else if (currentTime < 12) {
        $("#text-area-5").addClass("future");
    }

    if (currentTime > 13){
        $("#text-area-6").addClass("past");
    } else if (currentTime >= 13 && currentTime < 14) {
        $("#text-area-6").addClass("present");
    } else if (currentTime < 13) {
        $("#text-area-6").addClass("future");
    }

    if (currentTime > 14){
        $("#text-area-7").addClass("past");
    } else if (currentTime >= 14 && currentTime < 15) {
        $("#text-area-7").addClass("present");
    } else if (currentTime < 14) {
        $("#text-area-7").addClass("future");
    }

    if (currentTime > 15){
        $("#text-area-8").addClass("past");
    } else if (currentTime >= 15 && currentTime < 16) {
        $("#text-area-8").addClass("present");
    } else if (currentTime < 15) {
        $("#text-area-8").addClass("future");
    }

    if (currentTime > 16){
        $("#text-area-9").addClass("past");
    } else if (currentTime >= 16 && currentTime < 17) {
        $("#text-area-9").addClass("present");
    } else if (currentTime < 16) {
        $("#text-area-9").addClass("future");
    }

    if (currentTime > 17){
        $("#text-area-10").addClass("past");
    } else if (currentTime >= 17 && currentTime < 18) {
        $("#text-area-10").addClass("present");
    } else if (currentTime < 17) {
        $("#text-area-10").addClass("future");
    }



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
myCalendar();