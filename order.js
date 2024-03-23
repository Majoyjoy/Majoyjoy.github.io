function submitForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var location = document.getElementById("location").value;
    var cookieType = document.getElementById("cookieType").value;
    var quantity = document.getElementById("quantity").value;

    // Validate quantity input
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return false;
    }
    
    var totalPrice = calculateTotalPrice(cookieType, quantity);
    
    // Store order details in localStorage
    localStorage.setItem('orderDetails', JSON.stringify({
        name: name,
        number: number,
        location: location,
        cookieType: cookieType,
        quantity: quantity,
        totalPrice: totalPrice
    }));

    // Redirect to place.html after storing order details
    window.location.href = "place.html";
    
    return false;
}
