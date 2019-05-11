/* 
should display

_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_


*/


function chessBoard(row, column) {
    let hash = ''
        for(let i = 1; i <= row; i++) {
            for (let j = 0; j < column; j++) {
                if (i % 2 !== 0 && j % 2 !== 0) {
                    hash += '_#'
                    console.log(i, j)
                } else if (i % 2 === 0 && j % 2 === 0) {
                    hash += '#_'
                    console.log(i, j)
                }
            }
            hash +='\n'
        }
        return hash
}

console.log(chessBoard(8, 8))