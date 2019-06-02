/* 

Truncate a string(first argument) if it is longer than the given maximum string length(second argument).Return the truncated string with a...ending.

*/

function truncateString(str, num) {
    const newStr = str.substring(0, num)
    return newStr.length === str.length ? newStr : `${newStr}...`
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)