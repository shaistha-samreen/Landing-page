document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message Sent! We will contact you soon.');
        // Here, you would send the form data to a backend service
    } else {
        alert('Please fill out all fields.');
    }
});

