let error;
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const outputDay = document.querySelector(".outputd");
console.log(outputDay);
const outputMonth = document.querySelector(".outputm");
console.log(outputMonth);
const outputYear = document.querySelector(".outputy");
console.log(outputYear);
const button = document.querySelector("img");
const form = document.querySelector("form");
let monthWiseDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let outputD;
let outputM;
let outputY;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  vaidatingProcess(inputDay, inputMonth, inputYear);
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 100);
});

function vaidatingProcess(d, m, y) {
  checkError(d);
  checkError(m);
  checkError(y);
  if (!error) {
    outputCal(d, m, y);
  }
}

function checkError(x) {
  if (!x.value) {
    requiredErrorMessage(x);
  } else {
    leapYearCheck(inputYear.value);
    if (x.id === "year") {
      if (inputYear.value > year || inputYear.value <= 0) {
        invalidErrorMessage(x);
      } else {
        removeErrorFormat(x);
      }
    } else if (x.id === "month") {
      if (inputMonth.value > monthWiseDays.length || inputMonth.value <= 0) {
        invalidErrorMessage(x);
      } else removeErrorFormat(x);
    } else if (x.id === "day") {
      if (
        inputDay.value > monthWiseDays[inputMonth.value - 1] ||
        inputDay.value <= 0 ||
        inputDay.value > 31
      ) {
        invalidErrorMessage(x);
      } else {
        removeErrorFormat(x);
      }
    }
  }
}

function showErrorFormat(x) {
  x.previousElementSibling.classList.add("errorText");
  x.classList.add("errorBorder");
  error = true;
}

function removeErrorFormat(x) {
  x.nextElementSibling.innerHTML = "";
  x.previousElementSibling.classList.remove("errorText");
  x.classList.remove("errorBorder");
  error = false;
}

function requiredErrorMessage(x) {
  x.nextElementSibling.innerHTML = "This field is required";
  showErrorFormat(x);
}

function invalidErrorMessage(x) {
  x.nextElementSibling.innerHTML = `Must be a valid ${x.id}`;
  showErrorFormat(x);
}

function leapYearCheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    monthWiseDays[1] = 29;
  } else {
    monthWiseDays[1] = 28;
  }
}

function outputCal(d, m, y) {
  if (d.value > day && m.value >= month) {
    outputD = (day+monthWiseDays[m.value-1]) - d.value;
    outputM = month-1;
      if (outputM < m.value) {
        outputM = (outputM + 12) - m.value;
        outputY = (year-1)-y.value;
      }
  } else if (d.value <= day && m.value > month) {
    outputD = day - d.value;
    outputM = (month+12) - m.value;
    outputY = (year-1) - y.value;
  } else {
    outputD = day - d.value;
    outputM = month - m.value;
    outputY = year - y.value;
  };
  setTimeout(() => {
    outputYear.innerText = outputY;
    setTimeout(() => {
      outputMonth.innerText = outputM;
      setTimeout(() => { 
        outputDay.innerText = outputD;
      }, 500);
    }, 500);
  }, 500);
}

