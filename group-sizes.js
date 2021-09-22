const prompt = require('prompt-sync')();

const groupSize = number(prompt( 'is the class size even or odd'))

if (groupSize % 3 === 0){
    consol.log(groupSize / 3, 'groups of three')
    }

    else if (groupSize % 3 === 1){
        const numGroupOfThree = (groupSize - 4) / 3
        const numGroupOfTwo = 2 
        console.log(numGroupOfThree, 'groups of three', numGroupOfTwo, 'groups of two')

    }

    else if ( groupSize % 3 === 2){
        const numGroupOfThree = (groupSize - 2) /3
        const numGroupOfTwo = 1
        console.log(numGroupOfThree, "groups of three", numGroupOfTwo, 'groups of two' )
    }




