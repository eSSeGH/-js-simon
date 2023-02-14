// Visualizzare in pagina 5 numeri casuali con alert.

let randNums = []

while (randNums.length < 5) {

    let num = parseInt(randMinMax(1, 100))

    if (countInArray(randNums, num) === 0) {
        randNums.push(num)
    }
}

alert(randNums)

setTimeout(ask5Nums, 30000)

alert("hai 30 secondi per ripassare i numeri che hai visionato")





// FUNCTIONS

// ASK 5 NUMBERS FUNCTION
function ask5Nums() {

    console.log(randNums)

    let askedNumsArray = []
    let correctNumsArray = []

    for (i=0; i<randNums.length; i++) {
        let askedNum = parseInt(prompt("Inserisci un numero che ricordi"))

        if (randNums.includes(askedNum) && !correctNumsArray.includes(askedNum)) {

            correctNumsArray.push(askedNum)        
        }
    } 
    
    console.log(correctNumsArray)

    console.log(`Hai indovinato ${correctNumsArray.length} numeri,
    e sono i seguenti:`, correctNumsArray)
}

// GET RANDOM BETWEEN MIN AND MAX FUNC
function randMinMax(min, max) {

    variable = Math.floor(Math.random() * (max - min + 1)) + min

    return variable
}

// COUNT IN ARRAY FUNC
function countInArray(array, object) {

    let count = 0;

    for (var i = 0; i < array.length; i++) {

        if (array[i] === object) {
            count++;
        }
    }
    return count;
}


