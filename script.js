// Get the canvas element and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Load the image
var img = new Image();
img.src = "images/avatar.jpg";

// Set the initial position and velocity of the image
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 100;
var angle = 0;
var speed = 0.035;

// Draw the background circle
function drawBackground() {
    var gradient = ctx.createRadialGradient(x, y, radius / 2, x, y, radius);
    gradient.addColorStop(0, "#ffe6e6");
    gradient.addColorStop(1, "#ff99b3");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
}

// Animate the image
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background circle
    drawBackground();

    // Calculate the new position of the image
    angle += speed;
    x = canvas.width / 2 + radius * Math.cos(angle);
    y = canvas.height / 2 + radius * Math.sin(angle);

    // Save the canvas context state
    ctx.save();

    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(x, y, 90, 0, 2 * Math.PI);
    ctx.clip();

    // Draw the image
    ctx.drawImage(img, x - 100, y - 100, 200, 200);

    // Restore the canvas context state
    ctx.restore();

    // Request the next frame of the animation
    requestAnimationFrame(animate);
}

// Start the animation
img.onload = function() {
    animate();
};