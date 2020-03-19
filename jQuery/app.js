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

    // Objective #3. changes div background color to blue if the mouse is hovering over it, then change back when it no longer hovers.
    $('#colorChangeDiv').mouseover(function () {
        $(this).css('background-color', 'blue');
    })
    $('#colorChangeDiv').mouseout(function () {
        $(this).css('background-color', 'white');
    })

    // Objective #4. creates function for generating random color.
    function randomColor() {
        let colorR = Math.floor((Math.random() * 256));
        let colorG = Math.floor((Math.random() * 256));
        let colorB = Math.floor((Math.random() * 256));
        let color = `rgb(${colorR},${colorG},${colorB})`;
        return color;
    }

    // Objective #4. creates paragraph with text and appends to body of doc. click function changes text color to a random color.
    let para = $('<p></p>').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    $('body').append(para);
    $(para).click(function () {
        $(this).css('color', randomColor());
    })
})