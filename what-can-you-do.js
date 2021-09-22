const prompt = require('prompt-sync')();

const age = prompt('please enter your age');
if (age < 16){
    console.log('you cant drive')
}


else if (age < 17){
    console.log('you can drive but not voye');
}
else if (age < 24){
    console.log('you can vote but not rent a car');
}
else if (age < 26){
    console.log('can do what you want when you want');
}