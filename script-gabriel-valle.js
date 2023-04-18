alert("Bom dia, Mundo!!!")

//Area do trinagulo

function caluculoAreaTriangulo(){
    let base = parseFloat( document.getElementById("base").value );
    let altura = parseFloat( document.getElementById("altura").value);

    let area = (base + altura) /2;

    document.getElementById("Resultado").value = area; 
}

//função que retorne o cubo

function caluculoCubo(){

    let valorCubo = parseFloat ( document.getElementById("cubo").value);
    let resultado = Math.pow (valorCubo, 3);

    document.getElementById ("valor-cubo").value = resultado;

}

//conversão de temperatura

// input range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')

// input number
let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')

numeroC.value = celsius.value
numeroF.value = fahrenheit.value

function atualizaC() {
    numeroC.value = celsius.value
}

/* FORMULAS DE CONVERSAO 
celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

fahrenheit_celsius = (fahrenheit - 32) * 5/9
fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

kelvin_celsius = kelvin - 273.15
kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
*/

function atualizaF() {
    let celsius_fahrenheit = (celsius.value * 9/5) + 32
    numeroF.value = celsius_fahrenheit.toFixed(2)
}
 
function zerar() {
    celsius.value = 0.0
    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
}

// Desconto

function descontando(){
    var valor = parseFloat (document.getElementById("valor").value);
    var desconto = 5/100;
    var valorDescontado = valor*desconto;
    var valorTotalComDesconto = valor-valorDescontado;
    document.getElementById("valorDesconto").value = valorDescontado;
    document.getElementById("valorMenosDesconto").value = valorTotalComDesconto;

}

//Função ano de nacimento

function maiorOuMenor(){
    var anoAtual = document.getElementById("anoAtual").value;
    var anoNascimento = document.getElementById("anoNascimento").value;
    var subtraindo = anoAtual-anoNascimento;

    document.getElementById("anoAtual").value = subtraindo;
    if (subtraindo >=18){
        document.getElementById("respostaMaiorIdade").value = ("é maior de idade.");
    }

    if (subtraindo <=17){
        document.getElementById("respostaMaiorIdade").value = ("é menor de idade.")
    }
}

//carro novo

function valorEmMaos(){
    let dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let calculo = dinheiro/5;
    let quilometro = calculo*20;

    document.getElementById("litros").value = calculo;
    document.getElementById("quilometros").value = quilometro;

}