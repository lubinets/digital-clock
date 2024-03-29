function clock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Set the time period (AM/PM)
  if (hours >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  // Set the 12-hour clock format
  let formatValue = formatSwitchBtn.getAttribute("data-format");
  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  // Add 0 for the values lower than 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;
}

let updateClock = setInterval(clock, 1000);

// Get the date
let today = new Date();
let dayNumber = today.getDay();
let monthNumber = today.getMonth();
let dayOfMonth = today.getDate();
let year = today.getFullYear();

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".month-name").innerHTML = months[monthNumber];
document.querySelector(".day-name").innerHTML = weekdays[dayNumber];
document.querySelector(".day-number").innerHTML = dayOfMonth;
document.querySelector(".year").innerHTML = year;

// Switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
});

// Dot menu toggle
const dotMenuBtn = document.querySelector(".dot-menu");
const dotMenu = document.querySelector(".dot-menu-selection");

dotMenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});
