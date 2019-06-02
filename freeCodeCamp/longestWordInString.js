/* 
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

function findLongestWordLength(str) {
    const strArray = str.split(' ')
    let num = 0
    for (let i = 0; i < strArray.length; i++) {
        strArray[i].length > num ? num = strArray[i].length : num += 0
    }
    return num
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");