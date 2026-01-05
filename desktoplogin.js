const form= document.getElementById("loginform");
const textdsplay = document.getElementById("textdsplay");

const username = "sunshine";
const password = "siegeuser@00"

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === username && password === password) {
        textdsplay.textContent = "Successful";

        localStorage.setItem( "LoggedIN", "true");

        setTimeout(() =>{
            window.location.href = "myprojects.html";
        }, 1000);
    
    } else{
        textdsplay.textContent = "Wrong, Please Try Again";
    }
});