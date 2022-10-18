//day 1
var options  = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateNow  = new Date();
var dateCustom  = new Date('02/07/2021');

console.log(dateNow.toString());
console.log(dateNow.toDateString());
console.log(dateNow.toLocaleString());
console.log(dateNow.toLocaleDateString());
console.log(dateNow.toGMTString());
console.log(dateNow.toUTCString());
console.log(dateNow.toISOString());