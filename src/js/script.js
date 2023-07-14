const numUm = document.getElementById ("num1")
const numDois = document.getElementById ("num2")
const numTres = document.getElementById ("num3")
const numQuatro = document.getElementById ("num4")
const numCinco = document.getElementById ("num5")
const numSeis = document.getElementById ("num6")
const numSete = document.getElementById ("num7")
const numOito = document.getElementById ("num8")
const numNove = document.getElementById ("num9")

function somar(){
    var res = .value + numDois.value
    return res
}

var resultadoSoma = somar(numUm, numDois, numTres, numQuatro, numCinco, numSeis, numSete, numOito, numNove)

function mult(numUm, numDois, numTres, numQuatro, numCinco, numSeis, numSete, numOito, numNove){
    var resMult = num * num
    return resMult
}

function sub(numUm, numDois, numTres, numQuatro, numCinco, numSeis, numSete, numOito, numNove){
    var resSub = num - num
    return resSub
}