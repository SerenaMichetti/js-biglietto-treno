//input
const age = parseInt(prompt('Inserisci la tua età'))
const distance = parseInt(prompt('Inserisci i chilometri da parcorrere'))
const price = 0.21

//elaborazione
const priceBase = distance * price
let priceJunior = 0
if (age < 18) {
    priceJunior = priceBase - (0.20 * priceBase)
}
let priceSenior = 0
if (age > 65) {
    priceSenior = priceBase - (0.40 * priceBase)
}

//output
let message = '';
if (priceJunior !== 0) {
    message = 'Il tuo biglietto costerà ' + priceJunior.toFixed(2) + '€'
} else if (priceSenior !== 0) {
    message = 'Il tuo biglietto costerà ' + priceSenior.toFixed(2) + '€'
} else {
    message = 'Il tuo biglietto costerà ' + priceBase.toFixed(2) + '€';
}

alert(message)
document.getElementById('msg').innerHTML = message;
