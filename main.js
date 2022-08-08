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