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
if (priceJunior !== 0) {
    alert('Il tuo biglietto costerà ' + priceJunior.toFixed(2) + '€')
} else if (priceSenior !== 0) {
    alert('Il tuo biglietto costerà ' + priceSenior.toFixed(2) + '€')
} else {
    alert('Il tuo biglietto costerà ' + priceBase.toFixed(2) + '€')
}
