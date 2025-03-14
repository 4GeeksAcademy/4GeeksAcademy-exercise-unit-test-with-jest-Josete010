const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum};


const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Funcion para convertir de dolares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

//Funcion para convedrtir de euros a dolares
//const fromEuroToDollar = (euros) => {
    //return euros * oneEuroIs.USD;
//}

//Funcion para convertir de yenes a libras
const fronYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}


//Exporta la funcion para usarla en otros archivos
//(similar a la palabra clave "export" cuando se use webpack)
module.exports = {sum, fromDollarToYen, fronYenToPound};


