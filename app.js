"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  loopThroughNames();
  loopThroughYears();
  loopThroughFiveFirstYears();
  loopThroughFiveLastYears();
  logNumbers();
}

// ========== forEach ========== //
function loopThroughNames() {
  names.forEach(function (name) {
    console.log(name);
  });
}
function logName(name, index) {}

// ========== for loop ========== //
// for (let index = 10; index > 0; index--) {
//   console.log(index);

function loopThroughYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];

    if (index === years.length - 1) {
      console.log(`${year} This is the last year in the list`);
    } else {
      console.log(year);
    }
  }
}

function loopThroughFiveFirstYears() {
  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year);
  }
}

function loopThroughFiveLastYears() {
  for (let index = 5; index > 0; index--) {
    const year = years[index];
    console.log(year);
  }
}

function logNumbers() {
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  for (let index = 1; index < 11; index++) {
    console.log(index);
  }

  for (let index = 10; index > 0; index--) {
    console.log(index);
  }
}
// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
