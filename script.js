const button = document.querySelector('.btn-arrow');
const link = "https://www.yamaclimbing.com/";
const emailAddress = document.querySelector('.email');
const required = document.querySelector('.requirements');
const errorIcon = document.querySelector('.icon-error');


function valid(emailAddress) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailAddress !== mailformat) {
    return required.style.display = "grid";
    } else {
        return link;
    }  //document.form1.text1.focus();        
}

button.addEventListener('click', valid);


/*function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
    } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
        }
    }*/