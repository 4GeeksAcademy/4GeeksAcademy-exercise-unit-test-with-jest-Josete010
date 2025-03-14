// Importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// Comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    //expect(total).toBe(23);
//});

//test('adds 5 + 3 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(5, 4);

    // Esperamos que la suma de esos 2 números sea 23
    //expect(total).toBe(9);
//});


//test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    //const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    //const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    //const expected = 3.5 * 1.07;

    //Hago mi comparación (la prueba)
    //expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    //})


test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(4);

    // Si 1 euro son 156.5 yenes, entoces 4 dolares debe ser (4 / 1.07 * 156.5)
    const expected = 4 / 1.07 * 156.5


    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(4)).toBe(expected); 
})


test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Si 1 dollar son 0.0072 pounds, entonces 1000 yenes debe ser (1000 * 0.0072)
    const expected = 1000 * 0.0072;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(expected); // 1 euro son 0.87 pounds, entonces 2 yenes debe ser (2 / 156.5 * 0.87)
})