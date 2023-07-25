const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const button = document.querySelector("button");
const form = document.querySelector("form");
let monthWiseDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (e) => {
  e.preventDefault();
//   if (!inputDay.value || !inputMonth.value || !inputYear.value) {
//     console.log("this field is required");
//   } else if (inputDay.value > monthWiseDays[inputMonth.value + 1]) {
//     console.log("Must be a valid day");
//   } else if (inputMonth.value > monthWiseDays.length) {
//     console.log("Must be a valid month");
//   } else if (inputYear.value > year) {
//     console.log("Must be a valid year");
//   } else if (
//     inputYear === year &&
//     inputMonth.value === month &&
//     inputDay.value > day
//   ) {
//     console.log("Must be a valid all");
//   } else if (inputYear === year && inputMonth.value > month) {
//     console.log("Must be a valid all");
//   }

});


function checkError(day,month,year) {

}

function leapYearCheck(year) {
  year.value % 4 !== 0
    ? console.log("Not Leap Year")
    : year.value % 100 === 0 && year.value % 400 !== 0
    ? console.log("Not Leap Year")
    : console.log("Leap Year");
}

