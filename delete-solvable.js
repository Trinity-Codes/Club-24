const fs = require('fs');
const file = fs.readFileSync('answersheetAll.dat', {encoding: 'utf8'});

const arr = file.split('\n');

let allNope = '';
let checkNope = arr.forEach(line => {
    allNope += addNopeLine(line);
})

fs.writeFileSync('nonsolvable.dat', allNope);


function addNopeLine(line){
    if(line.includes('nope')){
        return line.split(' : ')[0] + '\n';
    };
    return '';
}