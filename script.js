//QTD CARNE-400G/PESSOA + 6H=650G
//QTD BREJA-4LONG/PESSOA + 6H=6LONG
//REFRIGERANTE-1000ML/CRIANÇA

function calcular(){
    let criancas = document.getElementById("criancas").value;
    let adultos = document.getElementById("adultos").value;
    let duracao = document.getElementById("horas").value;
    let resultado = document.getElementById("resultado")
    
    let QTDCARNES = carnePP(duracao) * adultos + (carnePP(duracao) / 2  * criancas);
    let QTDBREJAS = brejaPP(duracao) * adultos;
    let QTDREFRIS = refriPP(duracao) * criancas

    resultado.innerHTML = `<li>${QTDCARNES}G de carne </li>`
    resultado.innerHTML += `<li>${QTDBREJAS} long neck</li>`
    resultado.innerHTML += `<li>${QTDREFRIS}L de refrigerante </li>`
    numeroNegativo()
}

function refriPP(duracao){
    if ( duracao <=5){
        return 1.0
    }
    else{
        return 1.5
    }
}

function brejaPP(duracao){
    if ( duracao <= 5){
        return 4;
    }
    else{
        return 6;
    }
}

function carnePP(duracao){
 if (duracao <= 5){
     return 400;
 }
else{
    return 650;
}

}



