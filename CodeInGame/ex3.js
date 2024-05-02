/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let zeroPos = 5526
let zeroNeg = -273
let result = 0
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (t < zeroPos && t > 0){
        zeroPos = t
    }
    
    if (t > zeroNeg && t < 0){
        zeroNeg = t
    }

    let calc = zeroNeg * -1
    
    if (calc < zeroPos){
         result = calc
    } else {
         result = zeroPos
    }

    //console.log(zeroPos)
    
}
console.log(result)


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log('result');
