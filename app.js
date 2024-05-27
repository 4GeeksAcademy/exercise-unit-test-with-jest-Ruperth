// app.js

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}
function fromEuroToYen(euros) {
    return euros * oneEuroIs["JPY"];
}
function fromEuroToPound(euros) {
    return euros * oneEuroIs["GBP"];
}
module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound };
