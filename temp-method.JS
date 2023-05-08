// ...Trier les nombres par ordre croissant...//

const numbers = [5, 3, 8, 1, 2, 9, 4, 7, 6];
let temp;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);

//... Trier les nombres par ordre decroissant...//

const numbers = [5, 3, 8, 1, 2, 9, 4, 7, 6];
let temp;

// Array...//
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);