const fs = require('fs');

const max = 13;

function getFourNumbers(){
    const result = [];
    const maxNum = 4;
    for (let i=1; i<=maxNum; i++){
        result.push(getRandomNumber(max));
    };
    const originalNumbers = [...result];
    const sortedNumbers = result.sort((a, b) => a - b); 
    const formatedNumbers = result.join('  ')+'\n';
    let els;
    while (els = !areNumbersValid(sortedNumbers)){
        return originalNumbers;
    }
      
    if (!els) {
        return formatedNumbers;
    }
    
};

const getRandomNumber = max => Math.ceil(Math.random(max)*10);

function areNumbersValid(numbers) 
{
    const unsolvableNumbers = fs.readFileSync('nonsolvable.dat', {encoding: 'utf8'});
    const arr = unsolvableNumbers.split('\n');
    return arr.includes(numbers);
}

// const valid = areNumbersValid(numbers);

// function newSetOfNumbers(valid){
//     if (valid) {
//         getFourNumbers();
//     }
// }




module.exports = {getFourNumbers, areNumbersValid};
