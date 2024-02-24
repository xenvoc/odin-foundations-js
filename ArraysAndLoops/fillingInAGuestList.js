const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (person of people) {
    if (person === 'Phil' || person === 'Lola') refused.textContent += person + ", ";
    else admitted.textContent += person + ", ";
}

admitted.textContent = admitted.textContent.slice(0, -2) + ".";
refused.textContent = refused.textContent.slice(0, -2) + ".";

