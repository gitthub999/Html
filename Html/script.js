const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');

// Demo login: email=test@test.com, password=1234
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    if(email === "test@test.com" && password === "1234") {
        successMsg.style.display = 'block';
        // Login hole onno page e niye jabe
        // setTimeout(() => {
        //     window.location.href = "dashboard.html";
        // }, 1000);
    } else {
        errorMsg.style.display = 'block';
    }
});
