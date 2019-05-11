
// STRING REVERSAL FUNCTION
function reverseString(str) {
    
 var newString = str.split('').reverse().join(''); 
 // var newString will have the value of our reversed str
 // .split('') will seperate/split (will turn into array of str) the str by each character because of ('')
 // .reverse() will reverse the str that has been split
 // .join('') will join the reversed string without char seperator between because of ('') empty seperator
  return newString; //output new constructed string
}

reverseString("exbattalion");

// -------------------------------------------------------------------------

// GETTING FACTORIAL OF A NUMBER E.G. !5
function factorialize(num) { 
    var factorial = 1; //initial value of our output

    // loop 
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i; 
        //      1 = 1         * i = 1
        //      1 = 1         * 2 = 2
        //      2 = 2         * 3 = 6
        //      6 = 6         * 4 = 24
        //     24 = 24        * 5 = 120
        // factorial = 120
    }
    i++; // increment i if still less than num
    return factorial; // output computed factorial
}

factorialize(5);

// -------------------------------------------------------------------------

// PALINDROME CHECK
function palindrome(str) {
    // Good luck!
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // var cleanStr will hold our clean string
    // .replace(/[^a-zA-Z0-9]/g, '') will remove all special characters except numbers and letters
    // .toLowerCase() will force the str to be lower case
    var stringPalindrome = str.split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // var stringPalindrome will hold our reversed str
    // this will reverse our string, then remove all special characters and force it to be lowercase

    // condition
    if (stringPalindrome === cleanStr) {
        return true;
    } else {
        return false;
    }

}

palindrome("race@@@ car");

// -------------------------------------------------------------------------

// FINDING THE LONGEST WORD IN A SENTENCE

function findLongestWord(str) {
    var strArray = str.split(" "); // will hold our string array, split our sentence by each word
    var longStr = ""; // container of longest word


    // loop through our strArray that contain our splitted sentence
    for (var i = 0; i < strArray.length; i++) {
        // condition: if the length of longStr is < our current array on the loop [i]
        if (longStr.length < strArray[i].length) {
            //give longStr new value
            longStr = strArray[i];
        }
    }
    return longStr.length; // return the length of the longest word
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// -------------------------------------------------------------------------


// CAPITALIZING ALL FIRST LETTER

function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        // \w looks for a word character a-z, A-Z, 0-9 and underscore _
        // \S any character that is not a white space character
        // * look for n zero or more times
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

titleCase("I'm a little tea pot");

// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     var result = convertToArray.map(function (val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
// }

// titleCase("I'm a little tea pot");: rocket: Run Code 381

// Code Explanation:
//     We are making entire string lowercase and then converting it into array.Then we are using map
// function to replace the lowercase character with uppercase.Finally, we are returning the string using join method.


// -------------------------------------------------------------------------

// GETTING LARGEST NUMBER FROM 2D ARRAY

function largestOfFour(arr) {
    // You can do this!v
    var largestFour = []; // array container

    // loop through first layer of array
    for (var i = 0; i < arr.length; i++) {
        var largestFromArray = 0; // container for larges num inside array
        // loop to second layer
        for (var j = 0; j < arr[i].length; j++) {
            // condition: if the largestFromArray is < the num in second layer array
            if (largestFromArray < arr[i][j]) {
                largestFromArray = arr[i][j]; // store the value
            }
        }
        largestFour[i] = largestFromArray; // store the value inside the array
    }
    return largestFour;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


// -------------------------------------------------------------------------

// CHECK IF THE STRING ENDS WITH OUR SPECIFIED VALUE

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    
    // The substr() method returns the part of a string between the start index and a number of characters after it.
    if (str.substr(-target.length, target.length) === target) { 
        // condition: check if substr index match our target
        // str.substr(-target.length, target/length) gets the value of length
        // e.g. target="n"    str.substr(-1, 1) n length is 1
        // -target.length  with value of negative so we will look at the end of the string
        return true;
    }
    return false;
}

confirmEnding("Bastian", "n");


// -------------------------------------------------------------------------

 // repeating string

 function repeatStringNumTimes(str, num) {
     // repeat string * num times
     var newString = "";
     for (var i = 0; i < num; i++) {
         newString += str;
     }
     return newString;
 }

 repeatStringNumTimes("123", 5);


 // -------------------------------------------------------------------------

 // TRUNCATE STRING

 function truncateString(str, num) {
     // Clear out that junk in your trunk
     var newString = str.slice(0, num);
     // condition: if str.length > num and num is > 3
     if (str.length > num && num > 3) {
         // return str and slice num - 3 and ... (... is counted in str length)
         return str.slice(0, num - 3) + "...";
         // condition if str.lenght > num and num < 3
     } else if (str.length > num && num < 3) {
         // return str and slice num
         return str.slice(0, num) + "...";
     } else {
         return newString;
     }

 }

 truncateString("Absolutely Longer", 2);


 // -------------------------------------------------------------------------

// DIVIDING ARRAY TO CHUNKS

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var chunks = []; // array container

    // loop 
    for (var i = 0; i < arr.length; i += size) {
        // will push sliced data from array with index of the given i and the size + i
        chunks.push(arr.slice(i, size + i));
    }
    return chunks;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);


 // -------------------------------------------------------------------------

 // RETURN REMAINING ARRAYS

 function slasher(arr, howMany) {
     // it doesn't always pay to be first
     var newArray = arr.splice(0, howMany); // will remove arrays from index indicated
     return arr;
 }

 slasher([1, 2, 3], 2);

// -------------------------------------------------------------------------

//  CHECH OF ALL CHAR OF FIRST ELEMENT IN ARRAY IS ON SECOND ELEMENT

function mutation(arr) {
    var str1 = arr[0].toLowerCase(); // to lowercase
    var str2 = arr[1].toLowerCase();


     // loop at each char in str2
    for (var i = 0; i < str2.length; i++) {
    // condition: check if the char on str2[i] exist on str1 using indexOf
        if (str1.indexOf(str2[i]) === -1)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);


// -------------------------------------------------------------------------

// using filter() to get elements that are true
function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    var truthy = arr.filter(function (truth) {
        if (truth) {
            return true;
        }
    });
    return truthy;
}

bouncer([7, "ate", "", false, 9]);

// -------------------------------------------------------------------------

function destroyer(arr) {
    // Remove all the values

    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arguments[i] === arr[j]) {
                delete arr[j];
            }
        }
    }
    return arr.filter(Boolean);

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// -------------------------------------------------------------------------

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);

    var sorted = arr.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    });
    return sorted.indexOf(num);
}

getIndexToIns([40, 60], 50);

// -------------------------------------------------------------------------

function rot13(str) { // LBH QVQ VG!
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        if (char < 65 || char > 90) {
            arr.push(str[i]);
        } else if (char < 78) {
            arr.push(String.fromCharCode(char + 13));
        } else {
            arr.push(String.fromCharCode(char - 13));
        }
    }
    return arr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// -------------------------------------------------------------------------

// will get a string and reverse the word if length is > 5

function spinWords(str) {
    //TODO Have fun :)

    let strArray = str.split(' ');
    let spunWords = [];

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length < 5) {
            spunWords.push(strArray[i]);
        } else {
            let reverseString = strArray[i].split('').reverse().join('');
            spunWords.push(reverseString);
        }
    }
    return spunWords.join(" ");
}


if (s[i] === s[i].toLowercase()) {
    s[i].toUpperCase();
} else {
    s[i].toLowerCase();
}