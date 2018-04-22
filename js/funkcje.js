'use strict';


function dodajLiczby(pierwszaliczba, drugaliczba) {
    var wynik = pierwszaliczba + drugaliczba;
    
//    console.log(wynik);
    return wynik;
}

var wynik2Funkcji = dodajLiczby(5,7);

console.log(wynik2Funkcji);

dodajLiczby(4,7);

function aktualnyRok () {
    console.log("2018");
}

var aktualnyMiesiac = function() {
    console.log("kwiecien");
}

console.log(aktualnyMiesiac);

aktualnyMiesiac();


aktualnyRok()