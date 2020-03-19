// Objective #1. creates a button after the page is first loaded, and the button has a click event that creates an alert.
$(document).ready(function () {
    let alertButton = $('<button></button>').text('Click for an alert');
    $('body').prepend(alertButton);

    $(alertButton).click(function () {
        alert('Thanks for clicking!');
    })
})