// DISPLAYING THE TODAY'S DAY
// getting the day of the week
let today = new Date();
let currentDay = today.getDay();
let day = "";

switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
};

//getting the date of the month
let currentDate = today.getDate();
let dateEnding = "";

switch (currentDate) {
    case 1:
    case 21:
    case 31:
        dateEnding = "st";
        break;
    case 2:
    case 22:
        dateEnding = "nd";
        break;
    case 3:
    case 23:
        dateEnding = "rd";
        break;
    default: 
        dateEnding = "th";
}

document.getElementById("demo").innerHTML =day + " " + today.getDate() + dateEnding;

// changing the colour based on the day

const dayColour = document.getElementById("demo").classList;


switch (currentDay) {
    case 0:
        dayColour.add("sunday");
        break;
    case 1:
        dayColour.add("monday");
        break;
    case 2:
        dayColour.add("tuesday");
        break;
    case 3:
        dayColour.add("wednesday");
        break;
    case 4:
        dayColour.add("thursday");
        break;
    case 5:
        dayColour.add("friday");
        break;
    case 6:
        dayColour.add("saturday");
        break;
};


// a "close" button and append it to each list item

var myListItems = document.getElementsByTagName("li");
var i;

for (i = 0; i < myListItems.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myListItems[i].appendChild(span);
}

// click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    }
}, false);


// adding new list items 
function addNewItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write a todo");
    } else {
        document.getElementById("myTodoList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}