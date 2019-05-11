//create a program that will accept a number input and convert it to roman numeral


function convertToRoman(num) {
    const numToStr = num.toString()
    let romanNumeral = ''
    let one
    let ten
    let hundred
    let thousand

    if (numToStr.length === 1) {
        one = ones(num)
        romanNumeral += `${one}`
    } else if (numToStr.length === 2) {
        ten = tens(Math.floor(num / 10))
        one = ones(num % 10)
        romanNumeral = `${ten}${one}`
    } else if (numToStr.length === 3) {
        hundred = hundreds(Math.floor(num / 100))
        ten = tens(Math.floor((num % 100) / 10))
        one = ones((num % 100) % 10)
        romanNumeral = `${hundred}${ten}${one}`
    } else if (numToStr.length === 4) {
        thousand = thousands(Math.floor(num / 1000))
        hundred = hundreds(Math.floor((num % 1000) / 100))
        ten = tens(Math.floor(((num % 1000) % 100) / 10))
        one = ones(((num % 1000) % 100) % 10)
        romanNumeral = `${thousand}${hundred}${ten}${one}`
    }

    // return romanNumeral
    return romanNumeral    
}

function ones(num) {
    let romanNumeral = ''
    switch (num) {
        case 1:
            romanNumeral += 'I'
            break;
        case 2:
            romanNumeral += 'II'
            break;
        case 3:
            romanNumeral += 'III'
            break;
        case 4:
            romanNumeral += 'IV'
            break;
        case 5:
            romanNumeral += 'V'
            break;
        case 6:
            romanNumeral += 'VI'
            break;
        case 7:
            romanNumeral += 'VII'
            break;
        case 8:
            romanNumeral += 'VIII'
            break;
        case 9:
            romanNumeral += 'IX'
            break;
    }
    return romanNumeral
}

function tens(num) {
    let romanNumeral = ''
    switch (num) {
        case 1:
            romanNumeral += 'X'
            break;
        case 2:
            romanNumeral += 'XX'
            break;
        case 3:
            romanNumeral += 'XXX'
            break;
        case 4:
            romanNumeral += 'XL'
            break;
        case 5:
            romanNumeral += 'L'
            break;
        case 6:
            romanNumeral += 'LX'
            break;
        case 7:
            romanNumeral += 'LXX'
            break;
        case 8:
            romanNumeral += 'LXXX'
            break;
        case 9:
            romanNumeral += 'XC'
            break;
    }
    return romanNumeral
}

function hundreds(num) {
    let romanNumeral = ''
    switch (num) {
        case 1:
            romanNumeral += 'C'
            break;
        case 2:
            romanNumeral += 'CC'
            break;
        case 3:
            romanNumeral += 'CCC'
            break;
        case 4:
            romanNumeral += 'CD'
            break;
        case 5:
            romanNumeral += 'D'
            break;
        case 6:
            romanNumeral += 'DC'
            break;
        case 7:
            romanNumeral += 'DCC'
            break;
        case 8:
            romanNumeral += 'DCCC'
            break;
        case 9:
            romanNumeral += 'CM'
            break;
    }
    return romanNumeral
}

function thousands(num) {
    let romanNumeral = ''
    switch (num) {
        case 1:
            romanNumeral += 'M'
            break;
        case 2:
            romanNumeral += 'MM'
            break;
        case 3:
            romanNumeral += 'MMM'
            break;
        case 4:
            romanNumeral += 'MV'
            break;
        case 5:
            romanNumeral += 'V'
            break;
        case 6:
            romanNumeral += 'VM'
            break;
        case 7:
            romanNumeral += 'VMM'
            break;
        case 8:
            romanNumeral += 'VMMM'
            break;
        case 9:
            romanNumeral += 'IX'
            break;
    }
    return romanNumeral
}

convertToRoman(36);