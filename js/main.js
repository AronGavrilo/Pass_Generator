import { letters } from "./conf/module.js";
import { symbols } from "./conf/module.js";
import { up_letters }   from "./conf/module.js";
import { numbers } from "./conf/module.js";

let generatedPasswordEl = document.querySelector('#generated_password');
let passRangeBtn = document.querySelector('#pass_range');
let includedNumber = false;
let includedSybmols = false;
let charLenEl = document.querySelector('#char_len');
let statusEl = document.querySelector('#status');
let uppercaseSwitcher = document.querySelector('#uppercase');
let symbolsSwitcher = document.querySelector('#symbols');
let numbersSwitcher = document.querySelector('#numbers');

// Создание пароля

const createPassword = (pass_length) => {

      let createdPassword = [];
      let chars = letters;
  
    if(symbolsSwitcher.checked){

        chars += symbols;
    }

    
    if(uppercaseSwitcher.checked){
        chars += up_letters;
    }

    if(numbersSwitcher.checked){
        chars += numbers;
    }


    for(let i = 0; i < pass_length; i++){

        let random = Math.random() * chars.length;
        let index = Math.floor(random);
        createdPassword += chars[index];

    }
    

 if(pass_length < 10){
            statusEl.classList.remove('strong')
            statusEl.classList.remove('medium')
            statusEl.innerHTML = 'Weak'; statusEl.classList.add('weak')
    }
 
    if(pass_length > 10){
            statusEl.classList.remove('weak')
            statusEl.classList.remove('strong')
        statusEl.innerHTML = 'Medium'; statusEl.classList.add('medium')
    } 
    if(pass_length > 15){
        statusEl.innerHTML = 'Strong';
         statusEl.classList.remove('weak')
         statusEl.classList.remove('medium')
         statusEl.classList.add('strong')
    
    }

    generatedPasswordEl.innerHTML = createdPassword;
    console.log(createdPassword);
    return createdPassword;
    
}



createPassword(10);

passRangeBtn.addEventListener('input', (e) => {
   let char_len = e.target.value;
   createPassword(char_len);
   charLenEl.innerHTML = char_len;
})