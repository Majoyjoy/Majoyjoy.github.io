$(document).ready(function() {
    $(".contact-information").addClass("show");

    $("#contact-form").submit(function(event) {
        event.preventDefault();
        var firstName = $(".first-name").val();
        var lastName = $(".last-name").val();
        var emailAddress = $(".email-address").val();
        var phoneNumber = $(".phone-number").val();
        var message = $(".the-message").val();

        var mailtoLink = "mailto:maryjoyrule12@gmail.com" +
            "?subject=Message from " + encodeURIComponent(firstName + " " + lastName) +
            "&body=" + encodeURIComponent("Email: " + emailAddress + "\n" +
            "Phone Number: " + phoneNumber + "\n\n" +
            "Message: " + message);

        window.location.href = mailtoLink;
    });
});
