const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
container.appendChild(p);
p.style.color = 'red';
p.textContent = "Hey I’m red!";

const h3 = document.createElement('h3');
container.appendChild(h3);
h3.style.color = 'blue';
h3.textContent = "I’m a blue h3!";

// ---
const blackBordDiv = document.createElement('div');
blackBordDiv.style.border = 'black';
blackBordDiv.style.backgroundColor = 'pink';

const divh1 = document.createElement('h1');
divh1.textContent = "I'm a div";
blackBordDiv.appendChild(divh1);

const divp = document.createElement('p');
divp.textContent = "ME TOO!";
blackBordDiv.appendChild(divp);


container.appendChild(blackBordDiv);
// ---

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Yay you picked me! Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Well Hello World");
});


function alertFunction() {
    alert("YAY! YOU DID IT!")
}

const btn3 = document.querySelector('#btn3');

btn3.onclick = alertFunction;

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction);

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function(e) {
    console.log(e);
})

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function (e) {
    console.log(e.target);
})

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});