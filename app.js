let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87,  // British pound
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDolar) {
    let valueInEuro = valueInDolar / 1.07
    let valueInYen = valueInEuro * 156.5
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5
    let valueInPound = valueInEuro * 0.87
    return valueInPound;
}



module.exports = { fromEuroToDollar,fromDollarToYen, fromYenToPound }
