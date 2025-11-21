// Function for the Call-to-Action button on the Home Page
window.promptDiscountCode = function() {
    // Simple JavaScript prompt/alert interaction
    const userEmail = prompt("Enter your email to receive your 30% off discount code!");
    
    if (userEmail && userEmail.includes('@') && userEmail.includes('.')) {
        alert(`Thank you! Your discount code 'IRON30' has been sent to ${userEmail}.`);
    } else if (userEmail !== null) {
        alert("Please enter a valid email address.");
    }
};

// Function to handle form submission (will be used on contact.html)
function handleContactForm() {
    const form = document.getElementById('joinForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            // In a real app, you would send data to a server here.
            
            // Client-side validation check
            if (form.checkValidity() === false) {
                e.stopPropagation();
            } else {
                alert("Membership request submitted! We will call you within 24 hours.");
                form.reset();
            }
            form.classList.add('was-validated'); // Bootstrap class for validation display
        });
    }
}

// Initialize functions on load
document.addEventListener('DOMContentLoaded', () => {
    handleContactForm();
});