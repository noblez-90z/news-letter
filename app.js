const signup = document.querySelector('.container')
const thankyou = document.querySelector('.success-container')
const inputfd = document.querySelector('input')
const sumbitbtn = document.querySelector('#mail-submit')
const span = document.querySelector('#show')
console.log(thankyou)




var error = document.getElementById('error-message')
let form = document.getElementById('form')
console.log(error)
function validate(){
var email = document.getElementById('emailadd').value;

    if (email.length == 0) {
        error.innerHTML = "email is required";
        return false;
        
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.innerHTML = 'invalid email format';
        return false;
    }
    
    sumbitbtn.addEventListener('click',function(){
        span.textContent = inputfd.value
        inputfd.value = ""
    
    
        thankyou.classList.toggle('active')
        signup.classList.toggle('active')
    })
    return true;
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    
})




