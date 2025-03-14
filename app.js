//const sum = (a,b) => {
   // return a + b
//}

//console.log(sum(7,3))

//module.exports = {sum};


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Funcion para convertir de dolares a yenes
function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
}

//Funcion para convedrtir de euros a dolares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

//Funcion para convertir de yenes a libras
function fronYenToPound(yenes) {
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
}


//Exporta la funcion para usarla en otros archivos
//(similar a la palabra clave "export" cuando se use webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fronYenToPound };


