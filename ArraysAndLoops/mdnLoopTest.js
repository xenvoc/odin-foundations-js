// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i > -1) {
	const para = document.createElement('p');
	if (i === 10) {
		para.textContent = `Countdown ${i}`;
	}
	else if (i === 0) {
		para.textContent = "Blast off!";
	}
	else {
		para.textContent = i;
	}

	output.appendChild(para);
	i--;
}



/*
const para = document.createElement('p'); — creates a new paragraph.
output.appendChild(para); — appends the paragraph to the output <div>.
para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.

*/