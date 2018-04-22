'use strict';
var imiona = ["Monika", "Krystian", "Łukasz"];

imiona[3] = "Tania";
imiona[2] = "Ela";

imiona.push("Geralt");

imiona.pop();
imiona.pop();

console.log(imiona.unshift("Robert"));

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

console.log(imiona.join("."));


console.log(imiona.reverse());

var liczby = ["zero","dwa", "trzy"];

console.log(liczby.sort());