// Chercher le Maximum et le Minimum//
const numbers = [4, 67, 12, 0, 45, 20, 1]
let maximum = -Infinity
let minimum = Infinity
for (let number of numbers) {
    if (number > maximum)
        maximum = number
    if (number < minimum)
        minimum = number
}
console.log(maximum)
console.log(minimum)
