const div = document.createElement('div');
const body = document.body;
div.id = "container";

const btn1 = document.createElement('button');
btn1.textContent = 'btn1';
btn1.id = '1';
div.appendChild(btn1);

const btn2 = document.createElement('button')
btn2.textContent = 'btn2';
btn2.id = '2';
div.appendChild(btn2);


const btn3 = document.createElement('button')
btn3.textContent = 'btn3';
btn3.id = '3';
div.appendChild(btn3);

body.appendChild(div);

const buttons = document.querySelectorAll('button');

buttons.forEach((button => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
}));


