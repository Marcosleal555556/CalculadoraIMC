/*

Resultado abaixo de 17 - Muito abaixo do peso;
Resultado entre 17 e 18,49 - Abaixo do peso;
Resultado entre 18,5 e 24,99 - Peso ideal;
Resultado entre 25 e 29,99 - Obesidade grau Ⅰ;
Resultado entre 30 e 34,9 - Obesidade grau ⅠⅠ (severa);
Resultado entre 35 e 39,9 - Obesidade grau ⅠⅠⅠ (mórbida);

*/
var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    altura = parseFloat(document.getElementById("altura").value.replace(",","."));

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> você está com sobrepeso!";
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau Ⅰ!";
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau Ⅰ Ⅰ!";
    } else if (imc >= 40) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau Ⅰ Ⅰ Ⅰ!";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

}
