'use strict';

/*
document.getElementsByTagName("button")[0].onclick = ustawTlo;

function ustawTlo() {
    
    var pElements = document.body.getElementsByTagName("p");
    
    var myp1 = pElements[0];
    myp1.style.background = "red";
    
    var myp2 = pElements[1];
    myp2.style.background = "yellow";
    
}



var submitButton = document.querySelector("input[type=submit]");

submitButton.onclick = function(e) {
    e.preventDefault();
    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
    console.log(inputs[0].value);
    console.log(inputs[1].value);
};







*/


  
var submitButton = document.getElementById("wyslij");

submitButton.onclick = function(e) {
    e.preventDefault();
}

function validateFormFields () {
    
    var nameTextbox = document.getElementById("name");
    var emailTextBox = document.getElementById("emial");
    var marketingAcceptanceCheckbox = document.getElementById("Zgoda marketingowa-1");

    if (nameTextboxvalue.trim().length<=0) {
    
        insertErrorMessageElement("Nie wpisano imienia", nameTextbox);
    }
    
    if (emailTextBox.value.trim().length<=0) {
        
        insertErrorMessageElement("Nie wpisano imienia", marketingAcceptanceCheckbox);
        
    }
    
    if (!marketingAcceptanceCheckbox.checked) {
        
        insertErrorMessageElement("Zgodna musi być zazaczona", nameTextbox);
        
    
}



function insertErrorMessage(errorMessage, inputElement) {
    
        var errorMessageElement = document.createElement('p');
        errorMessageElement.style.color = "red";
        errorMessageElement.innerHTML = "Nie wpisałeś imienia";
    
    insertAfter(errorMessageElement, inputElement);
    
    
    
}

function insertAfter ( newNode, referenceNode ) {
     
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};
    






                                                        
                                                        
         









                                                        
                                                        