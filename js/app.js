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

let askedNumsArray = []

function ask5Nums() {

    for (i=0; i<5; i++) {
        let askedNum = parseInt(prompt("Inserisci un numero che ricordi"))
        askedNumsArray.push(askedNum)
    }

    let correctNumsArray = []


    for (i=0; i < askedNumsArray.length; i++) {

        if (randNums.includes(askedNumsArray[i])) {

            correctNumsArray.push(askedNumsArray[i])
        }
    }

    console.log(`Hai indovinato ${correctNumsArray.length} numeri,
    e sono i seguenti:`, correctNumsArray)
}

// FUNCTIONS

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


