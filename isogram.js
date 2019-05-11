// create an isogram function that will check if the word have duplicate characters
function isIsogram(str) {
    const newStr = str.toLowerCase().split('');

    for (let i = 0; i < newStr.length; i++) {
        for (let j = i + 1; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
                return false
            }

        }

    }
    return true
}
console.log(isIsogram('avdsqwertyy'))
