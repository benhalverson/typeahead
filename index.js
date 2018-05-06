const inventors = [
  { first: 'a', last: 'halverson', year: 1981, passed: 2050 },
  { first: 'b', last: 'y', year: 1940, passed: 2060 },
  { first: 'c', last: 'h', year: 1280, passed: 2025 },
  { first: 'd', last: 'abc', year: 1956, passed: 2030 },
  { first: 'e', last: 'asdasd', year: 2004, passed: 2060 }
];

const people = ['Beck, Glen', 'Ben, Halverson', 'Kevin, Halvrson'];
// const eighty = inventors.filter(inventor => inventor.year >= 1980 && inventor.year < 1989);
// const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
//
//
// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0);


// const oldest = inventors.sort((a, b) => {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   return lastGuy > nextGuy ? -1 : 1;
// });
//
// console.log(oldest);

// const request = require('request');
// const data = request('http://google.com', (req, res) => {
//   console.log(res);
// });
// .then(res => {
//   console.log(res);
// }).catch(err => console.log(err));

// console.log(data);
