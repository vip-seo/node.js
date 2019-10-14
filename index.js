const timer = require('./app');

console.log(new Date().toString('dd.MM.yyyy hh:mm'));
console.log(timer.addInterval(10,1,0,1,1));
console.log(timer.subtInterval(10,1,0,1,1));
