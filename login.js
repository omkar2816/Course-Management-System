document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.createElement('div'); 
       
        if (username === 'user' && password === 'password') {
            setTimeout(() => {
                window.location.href = 'index.html'; 
            }, 1000);
        } else {
            
            
            alert('Invalid Username and Password')
        }
    });
});

