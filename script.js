var resultado = document.getElementById('resultado')

function somar(){
    var n1 = parseInt(document.getElementById('numero1').value)
    var n2 = parseInt(document.getElementById('numero2').value)
    var soma = n1 + n2
    resultado.innerHTML = soma
}

function subtrair(){
    var n1 = parseInt(document.getElementById('numero1').value)
    var n2 = parseInt(document.getElementById('numero2').value)
    var sub = n1 - n2
    resultado.innerHTML = sub
}

function multiplicar(){
    var n1 = parseInt(document.getElementById('numero1').value)
    var n2 = parseInt(document.getElementById('numero2').value)
    var mult = n1 * n2
    resultado.innerHTML = mult
}

function dividir(){
    var n1 = parseInt(document.getElementById('numero1').value)
    var n2 = parseInt(document.getElementById('numero2').value)
    var divi = n1 / n2
    resultado.innerHTML = divi
}

function surpresa(){
    alert("SURPRESINHA!!!!!!")
}