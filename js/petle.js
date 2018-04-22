 'use strict';

for (var i=1 ; i<=5 ; i++) {
   
    console.log(i);
}

var tablica = ["Krystian", "Monika", "Danuta", "Agata" ];

for (var i=0; i<tablica.length; i++) {
    console.log( "Element z Indexem: " + i + " ma wartość " + tablica[i] );
}

tablica.forEach( function(element,index) {
    console.log( "Element z Indexem: " + index + " ma wartość " + element );
});

var it = 0;
while ( it < 10) {
    console.log(it);
    it++;
}

var iter = 8;
do {
    console.log(iter);
iter++;
    console.log(iter);
} while ( iter < 10 );


var a = 0;
while ( a<10 ) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    } else {
        console.log(a);
    }
    console.log("--");
}
    
    