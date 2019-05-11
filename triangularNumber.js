// create a program that will accept a number input
// sum up a specific row on the triangle numbers
// the num input will indicate the row

function rowSumOddNumbers(n) {
    let sum = 0
    const rows = generateTriangularNumbers(n)
    rows[n - 1].map(num => sum += num)
    return sum
}

const generateTriangularNumbers = (num) => {
    let arr = [
        [1]
    ]
    let sum = 1
    for (let i = 1; i < num; i++) {
        arr.push([])
        for (let j = 0; j <= i; j++) {
            arr[i].push(sum += 2)
        }
    }

    return arr
}

// -----------------

function odd(n) {
    return Math.pow(n, 3)
}
