const arr = [1, 2, 3, 4, 5];

function sumOfTripledEvens(arr) {
    return    arr.filter((num) => { return num % 2 === 0})
    .map((num) => { return num*=3})
    .reduce((total, num) => { return total + num}, 0);
}
console.log(sumOfTripledEvens(arr));

