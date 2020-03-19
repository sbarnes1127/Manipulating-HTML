document.addEventListener('DOMContentLoaded', function () {
    // Objective 1. creates a button with text, adds it to the doc, and creates an alert when clicked
    let btn = document.createElement('button');
    let btnText = document.createTextNode('click to make an alert!');
    btn.appendChild(btnText);
    document.getElementById('colorDiv').appendChild(btn);

    btn.addEventListener('click', function () {
        alert('Thanks for clicking!');
    })

    // Objective 2. creates a button and a text box, adds them to the doc, and creates an alert with the text from the text box when the button is clicked.
    let btn2 = document.createElement('button');
    let btn2Text = document.createTextNode('submit');
    let inputBox = document.createElement('input');
    btn2.appendChild(btn2Text);
    document.getElementById('colorDiv').appendChild(inputBox);
    document.getElementById('colorDiv').appendChild(btn2);

    btn2.addEventListener('click', function () {
        alert(inputBox.value);
    })
    
    // Objective 3. grabs the div by id, adds a mouseover and mouseout function to change color to blue and then back to white.
    let div = document.getElementById('colorDiv');
    div.addEventListener('mouseover', function () {
        div.style.backgroundColor = 'blue';
    })
    div.addEventListener('mouseout', function () {
        div.style.backgroundColor = 'white';
    })

}) 