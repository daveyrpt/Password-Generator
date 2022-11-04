"use strict";

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.getElementById("generateButton");
const generatePassword_1 = document.getElementById("generatedPasswords_1");
const generatePassword_2 = document.getElementById("generatedPasswords_2");
const passwordLengthText = document.getElementById("passwordLengthText");
const passwordLength = document.getElementById("passwordLength");
const popup = document.querySelector(".popup");
const useNumber = document.getElementById('useNumber');
const useSymbol = document.getElementById('useSymbol');

let charactersAvailable = [];
// Button to generate 2 distinct password based on give password length
generateButton.addEventListener('click', function() {
    generatePassword_1.textContent = temporaryGeneratedPassword(passwordLength.value,number_symbol_checkBox());

    generatePassword_2.textContent = temporaryGeneratedPassword(passwordLength.value,number_symbol_checkBox());
})

// Button click to copy password number 1
generatePassword_1.addEventListener('click', function() {
    //popup.classList.add('active');
    copyToClipboard(generatePassword_1);
})

// Button click to copy password number 2
generatePassword_2.addEventListener('click', function() {
    //popup.classList.add('active');
    copyToClipboard(generatePassword_2);
})

/*
popup.addEventListener('animationend', function() {
    popup.classList.remove('active');
})
*/
function number_symbol_checkBox() {

    // Accept letter, number, symbol
    if (useNumber.checked === true && useSymbol.checked === true) {
        console.log('Accept character, number, symbol');
        charactersAvailable = characters;
    } 
    
    // Accept letter
    else if (useNumber.checked === false && useSymbol.checked === false) {
        console.log('Accept character');
        charactersAvailable = [];

        for (let counter = 0; counter < characters.length; counter++) {
            if (isLetter(characters[counter]) === true) {
                charactersAvailable.push(characters[counter]);
            } else {
                console.log('Error line 62')
            }
        }
    } 

    // Accept letter, number
    else if (useNumber.checked === true && useSymbol.checked === false) {
        console.log('Accept letter, number');
        charactersAvailable = [];

        for (let counter = 0; counter < characters.length; counter++) {
            if (isLetter(characters[counter]) === true || isNumber(characters[counter]) === true) {
                charactersAvailable.push(characters[counter]);
            } else {
                console.log('Error line 72')
            }
        }
    }

    // Accept letter, symbol
    else if (useNumber.checked === false && useSymbol.checked === true) {
        console.log('Accept letter, number');
        charactersAvailable = [];

        for (let counter = 0; counter < characters.length; counter++) {
            if (isNumber(characters[counter]) === false) {
                charactersAvailable.push(characters[counter]);
            } else {
                console.log('Error line 86')
            }
        }
    }
    
    else {
        console.log('check something')
    }

    return charactersAvailable;
}

function randomGenerate(charactersAvailable) {
    let randomNumber = Math.floor(Math.random() * charactersAvailable.length);
    return charactersAvailable[randomNumber];
}

function temporaryGeneratedPassword(passwordLength,charactersAvailable) {
    let temporaryPassword = "";
    console.log(passwordLength);
    console.log(charactersAvailable);

    // Password length is set between 1 - 100
    if(passwordLength && passwordLength != 0) {
        console.log("Password length is set between 1 - 100");
        passwordLength = passwordLength;
        for (let counter = 0; counter < passwordLength; counter++) {
            temporaryPassword += randomGenerate(charactersAvailable);
        }
    } 
    
    // Password length is set to '0'
    else if (passwordLength === 0){
        console.log("Password length is set to '0'");
        passwordLength = 14;
        for (let counter = 0; counter < passwordLength; counter++) {
            temporaryPassword += randomGenerate(charactersAvailable);
        }
    } 
    
    // Password length left empty
    else {
        console.log("Password length left empty");
        passwordLength = 14;
        for (let counter = 0; counter < passwordLength; counter++) {
            temporaryPassword += randomGenerate(charactersAvailable);
        }
    }
    return temporaryPassword;
}

function copyToClipboard(generatePassword) {
    const textArea = document.createElement('textArea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.value = generatePassword.textContent;
    document.body.appendChild(textArea);
    textArea.select()
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)) {
        //'Accepted. Character is letter'
        return true;
    } else {
        // 'Rejected. Character is not letter'
        return false;
    }
}
 
function isNumber(str) {
    if (str.length === 1 && str.match(/[0-9]/i)) {
        return true;
        //'Accepted. Character is number';
    } else {
        return false;
        //'Rejected. Character is not number';
    }
}