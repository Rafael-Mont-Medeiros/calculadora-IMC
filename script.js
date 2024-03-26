function imcCalc(){
    const alt = Number(document.querySelector('#alt').value)
    const peso = Number(document.querySelector('#peso').value)
    const nome = document.querySelector('#nome').value
    const imc = (peso / (alt * alt)).toFixed(1)
    document.querySelector('#res').innerHTML = `Nome: ${nome} <br> IMC: ${imc}<br> Grau de obesidade:${classificacao(imc)}`
}
function classificacao (imc){
    if(imc < 18.5){
        return 'baixo peso'
    }
    if(imc <= 18.5 && imc <= 24.9){
        return 'Eutrogia (peso adequado)'
    }
    if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso'
    }
    if (imc >= 30 && imc <= 34.9){
        return 'Obesidade de grau 1'
    }
    if (imc >= 35 && imc <= 39.9){
        return 'Obesidade grau 2'
    }
    if (imc > 40){
        return 'Obesidade extrema'
    }
}


