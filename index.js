var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["0","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

document.getElementById("date").innerHTML = " " + days[d.getDay()] + ", " +  d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();s
