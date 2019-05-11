// create a program that will immitate the ceasar cipher

function rot13(str) { // LBH QVQ VG!
    const transformedStr = str.toUpperCase()
    const code = []
    for (let i = 0; i < transformedStr.length; i++) {
        code.push(transformedStr.charCodeAt(i));
    }

    const decipher = []
    code.forEach(function(char) {
        if (char >= 65 && char < 78) {
            decipher.push(char + 13)
        } else if (char >= 78 && char <= 90) {
            decipher.push(char - 13)
        } else {
            decipher.push(char)
        }
    })

    const hiddenCode = []
    decipher.forEach(function(char) {
        hiddenCode.push(String.fromCharCode(char))
    })
    
    return hiddenCode.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

