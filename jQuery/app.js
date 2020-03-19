// Objective #1. creates a button after the page is first loaded, and the button has a click event that creates an alert.
$(document).ready(function () {
    let alertButton = $('<button></button>').text('Click for an alert');
    $('body').prepend(alertButton);

    $(alertButton).click(function () {
        alert('Thanks for clicking!');
    })

    // Objective #2. click function on button to display alert of the contents of text box.
    $('#textBoxButton').click(function () {
        alert($('#textBox').val());
    })
})