let addressLat = 10; // Y1
let addressLong = 5; // X1
let positionLat = 30; // Y2
let positionLong = 20; // X2
let d;
d = Math.sqrt(Math.pow(positionLong - addressLong, 2) + Math.pow(positionLat - addressLat, 2));
console.log(d);