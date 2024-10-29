window.onload = function() {
    // Simulate loading time
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none'; // Hide loader
        document.getElementById('content').style.display = 'block'; // Show content
    }, 3000); // Change the time (in milliseconds) as needed
};