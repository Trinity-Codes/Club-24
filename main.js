const max = 13;

function getFourNumbers(){
    const result = [];
    const maxNum = 4;
    for (let i=1; i<=maxNum; i++){
        result.push(getRandomNumber(max));
    };

    return result;
};

const getRandomNumber = max => Math.ceil(Math.random(max)*10);

console.log(getFourNumbers());



//sort four numbers from lowest to highest


//convert array to string with spaces


//read the file


//compare string with file line by line


//if matches, know it's wrong => get new set of number
//if not match, it's right