document.addEventListener('DOMContentLoaded', function (){
    // Objective 1. creates a button with text, adds it to the doc, and creates an alert when clicked
    let btn = document.createElement('button');
    let btnText = document.createTextNode('click to make an alert!');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener('click', function (){
        alert('Thanks for clicking!');
    })

    let btn2 = document.createElement('button');
    let btn2Text = document.createTextNode('submit');
    let inputBox = document.createElement('input');
    btn2.appendChild(btn2Text);
    document.body.appendChild(inputBox);
    document.body.appendChild(btn2);

    btn2.addEventListener('click', function(){
        
        alert(inputBox.value);
    })
    
}) 