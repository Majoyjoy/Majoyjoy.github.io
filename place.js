document.addEventListener("DOMContentLoaded", function() {
    const cookieImg = document.querySelector('.cookie-img');
    const orderDetailsContainer = document.getElementById('order-details');
    
    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (orderDetails) {
        // Display order details on place.html
        const message = `Name: ${orderDetails.name}<br>Number: ${orderDetails.number}<br>Location: ${orderDetails.location}<br>Cookie: ${orderDetails.cookieType}<br>Quantity: ${orderDetails.quantity}<br>Total Price: ₱${orderDetails.totalPrice}`;
        orderDetailsContainer.innerHTML = message;
    }

    // Fade in animation for image
    setTimeout(() => {
        cookieImg.style.transition = 'opacity 1s ease';
        cookieImg.style.opacity = '1';
    }, 500);

    // Redirect to index.html after 3 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});
