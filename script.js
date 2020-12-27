const button = document.querySelector('.btn-arrow');
const required = document.querySelector('.requirements');
const errorIcon = document.querySelector('.icon-error');
const emailAddress = document.querySelector("#form-input");
const mailformat = /\S+@\S+\.\S+/;


function submitForm(e){
e.preventDefault()
let emailAddress = document.querySelector("#form-input")
if(emailAddress.value){
   valid(emailAddress.value)
}else {
    console.log("not valid")
    }
}

function valid(emailAddress){
    const link = "https://www.yamaclimbing.com/";
    if(mailformat.test(emailAddress)) {
        return window.location.href = link        // styleMedia.do something ot the style   
    } else { 
        required.style.color = "hsl(0, 93%, 68%)";
        errorIcon.style.display = "grid";
       console.log("not valid email format")   
    }
}

form.addEventListener('submit', submitForm);




