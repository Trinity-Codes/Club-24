const fs = require('fs');

const max = 13;

function getRandomNumbers(){
    const result = [];
    const maxNum = 4;
    for (let i=1; i<=maxNum; i++){
        result.push(getRandomNumber(max));
    };
    
    return result;
};

function getFourNumbers(){

    let fourNumbers = getRandomNumbers();
    console.log(fourNumbers);
    while(!areNumbersValid(fourNumbers)){
        fourNumbers = getRandomNumbers()
    }
    console.log('after', fourNumbers)
}

const sortNumbers = arr => arr.sort((a, b) => a - b);

const formateNumbers = arr => arr.join('  ')+'\n';

const getRandomNumber = max => Math.ceil(Math.random(max)*10);

function areNumbersValid(numbers) 
{
    const formatedNumbers = formateNumbers(numbers)
    const unsolvableNumbers = fs.readFileSync('nonsolvable.dat', {encoding: 'utf8'});
    const arr = unsolvableNumbers.split('\r\n');
    return !arr.includes(formatedNumbers);

}



module.exports = {getFourNumbers, areNumbersValid};
