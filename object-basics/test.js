const objects = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 20 },
    { id: 5, value: 25 }
];

const result = objects.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
}, {});

console.table(result);