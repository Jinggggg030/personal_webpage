function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    
    dateTimeDisplay.textContent = now.toLocaleDateString('en-US', options);
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById('currentYear').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields before submitting.");
        return;
    }

    formFeedback.textContent = `Thank you for reaching out, ${name}! Your message has been received.`;
    formFeedback.classList.remove('hidden');

    contactForm.reset();

    setTimeout(() => {
        formFeedback.classList.add('hidden');
    }, 5000);
});