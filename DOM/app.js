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

    // Objective 4. function to generate a random rgb color.
    function randomColor() {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let color = 'rgb(' + R + ',' + G + ',' + B + ')';
        return color;

    }
    // Objective 4. creates paragraph with text, and adds click event listener to change text to a random color using the function above.
    let paraDiv = document.getElementById('paraDiv');
    let para = document.createElement('p');
    let paraText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    para.appendChild(paraText);
    paraDiv.appendChild(para);

    para.addEventListener('click', function () {
        para.style.color = randomColor();
    })

    // Objective 5. creates empty div and button and appends them to the document.
    let spanButtonDiv = document.getElementById('spanButtonDiv');
    let emptyDiv = document.createElement('div');
    let spanButton = document.createElement('button');
    let spanButtonText = document.createTextNode('click to add a span with my name!');
    spanButton.appendChild(spanButtonText);
    spanButtonDiv.appendChild(spanButton);
    spanButtonDiv.appendChild(emptyDiv);

    // Objective 5. creates click event to add a span to the div with my name in it.
    spanButton.addEventListener('click', function () {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Sierra');
        span.appendChild(spanText);
        emptyDiv.appendChild(span);
    })
    // Objective 6. creates friend array, pulls button and ul by id, then adds click event to button to create list items for all of my friends in the array.
    let friends = ['John', 'Shelby', 'Rachel', 'Brenna', 'Liz', 'Hunter', 'Jacinda', 'Amber', 'Nick', 'Lucas'];
    let friendButton = document.getElementById('friendButton');
    let friendList = document.getElementById('friendList');

    friendButton.addEventListener('click', function () {
        for (let i = 0; i < friends.length; i++) {
            let listItem = document.createElement('li');
            let listItemText = document.createTextNode(friends[i]);
            listItem.appendChild(listItemText);
            friendList.appendChild(listItem);
        }
    })
}) 