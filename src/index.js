const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ' : ' ',
};

function decode(expr) {

    return expr.match(/.{1,10}/g).map((el) => {
        return el.substring(el.search('1')).match(/.{1,2}/g)
    }).map((el) => {
        return el[0] === '**' ? [' '] : el;
    }).map((el2) => {
        return el2.map(element => {
            return element == '10' ? '.' : element == '11' ? '-' : ' '
        }).join('');
    }).map((el) => {
        return Object.values(MORSE_TABLE)[Object.keys(MORSE_TABLE).indexOf(el)]
    }).join('')
}

module.exports = {
    decode
}
