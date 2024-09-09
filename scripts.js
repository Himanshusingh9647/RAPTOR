window.onload = function() {
    // Hide the spinner after the page loads
    document.getElementById('loadingSpinner').style.display = "none";
};

// Add event listeners to all anchor tags to show the spinner before navigating
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Show the spinner
        document.getElementById('loadingSpinner').style.display = "flex";

        // Delay the page navigation slightly so the spinner appears during the transition
        setTimeout(() => {
            window.location.href = this.href;
        }, 300); // 300ms delay for the spinner to be visible before page navigation
        
        // Prevent the default link click behavior immediately to allow spinner to show
        e.preventDefault();
    });
});
