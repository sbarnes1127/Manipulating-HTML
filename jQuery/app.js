// Objective #1. creates a button after the page is first loaded, and the button has a click event that creates an alert.
$(document).ready(function () {
    let alertButton = $('<button></button>').text('Click for an alert');
    $('#colorChangeDiv').prepend(alertButton);

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
    $('#paraDiv').append(para);
    $(para).click(function () {
        $(this).css('color', randomColor());
    })

    // Objective #5. creates button and div and appends them to the body. The function adds a span to the div on a click event.
    let spanButton = $('<button></button>').text('Click to add a span with my name!');
    let emptyDiv = $('<div></div>')
    $('#spanButtonDiv').append(spanButton);
    $('#spanButtonDiv').append(emptyDiv);

    $(spanButton).click(function () {
        let span = $('<span></span>').text('Sierra');
        $(emptyDiv).append(span);
    })

    // Objective #6. creates friend array, click event for friend list button that creates a li for each friend in the unordered list.
    let friends = ['John', 'Shelby', 'Rachel', 'Brenna', 'Liz', 'Hunter', 'Jacinda', 'Amber', 'Nick', 'Lucas'];
    $('#friendListButton').click(function () {
        for (let i = 0; i < friends.length; i++) {
            let listItem = $('<li></li>').text(friends[i]);
            $('#friendList').append(listItem);
        }
    })
})