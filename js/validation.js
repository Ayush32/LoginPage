/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');


email.addEventListener = document.getElementById(email_verify);
password.addEventListener = document.getElementById(pass_verify);


function validated(){
    if(email.value.length < 10){
        email_error.style.display  = "block"
        email.focus();
        return false;
    }
    if(password.value.length < 8){
        pass_error.style.display  = "block"
        password.focus();
        return false;
    }

}

function email_verify(){
     if (email.value.length >= 10) {
    //    email_error.style.display = "flex";
       email_error.style.display = 'none'
       
       return true;
     }

}
function pass_verify(){
     if (password.value.length >= 8) {
    //    email_error.style.display = "flex";
       pass_error.style.display = 'none'
       
       return true;
     }

}

