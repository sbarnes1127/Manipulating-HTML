document.addEventListener('DOMContentLoaded', function (){
    let btn = document.createElement('button');
    let btnText = document.createTextNode('click to make an alert!');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener('click', function (){
        alert('Thanks for clicking!');
    })
}) 