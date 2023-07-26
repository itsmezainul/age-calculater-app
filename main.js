const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const inputDay = document.querySelector("#day");
console.log(inputDay.id);
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const button = document.querySelector("img");
const form = document.querySelector("form");
let monthWiseDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkError(inputDay);
  checkError(inputMonth);
  checkError(inputYear);
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 100);
});

function checkError(x) {
  if (!x.value) {
    x.nextElementSibling.innerHTML = "This field is required";
    showErrorFormat(x);
  } else if (x.value) {
    removeErrorFormat(x);
  }
}

async function checkInvalidError(x) {
  if (x.value === day) {
    if (
      (inputYear.value === year &&
        inputMonth.value === month &&
        inputDay.value > date) ||
      inputDay.value > monthWiseDays[inputMonth.value]
    ) {
      x.nextElementSibling.innerHTML = `Must be a vaid ${x.value}`;
      showErrorFormat(x);
    }
  }
  //   else if (x.value === month) {
  //   } else if (x.value === year) {
  //   } else {
  //   }
}

function showErrorFormat(x) {
  x.previousElementSibling.classList.add("errorText");
  x.classList.add("errorBorder");
}

function removeErrorFormat(x) {
  x.nextElementSibling.innerHTML = "";
  x.previousElementSibling.classList.remove("errorText");
  x.classList.remove("errorBorder");
}

// new Promise((resolve, reject), () => {
//   if (!x.value) {
//     x.nextElementSibling.innerHTML = "This field is required";
//     showErrorFormat(x);
//   } else if (x.value) {
//     removeErrorFormat(x);
//   }
// });
