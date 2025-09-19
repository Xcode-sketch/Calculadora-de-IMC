"use strict";
const alturaInput = document.querySelector('.altura');
const pesoInput = document.querySelector('.peso');
const calcular = document.querySelector('.calcularBtn');
const resultado = document.querySelector('.resultado');
const erro = document.querySelector('.erro');
calcular.addEventListener('click', () => {
    const altura = Number(alturaInput.value);
    const alturaCM = altura / 100;
    const peso = Number(pesoInput.value);
    const IMC = peso / (alturaCM ** 2);
    const p = document.createElement(`p`);
    const p2 = document.createElement(`p`);
    erro.innerHTML = ``;
    resultado.innerHTML = ``;
    if (!altura || !peso) {
        p.innerText = `Altura  e peso devem ser especificadas!`;
        p.style.color = `#F3A50F`;
        erro.appendChild(p);
        return;
    }
    if (IMC < 18.5) {
        p.innerHTML = `${IMC}`;
        resultado.appendChild(p);
        p2.innerHTML = "Magreza";
        p2.style.color = "#0055FF";
        resultado.appendChild(p2);
    }
    else if (IMC < 25) {
        p.innerHTML = `${IMC}`;
        resultado.appendChild(p);
        p2.innerHTML = "Peso normal";
        p2.style.color = "#1cf13fff";
        resultado.appendChild(p2);
    }
    else if (IMC < 30) {
        p.innerHTML = `${IMC}`;
        resultado.appendChild(p);
        p2.innerHTML = "Sobrepeso";
        p2.style.color = "#f6ff00ff";
        resultado.appendChild(p2);
    }
    else if (IMC > 30) {
        p.innerHTML = `${IMC}`;
        resultado.appendChild(p);
        p2.innerHTML = "Obesidade";
        p2.style.color = "#ffd000ff";
        resultado.appendChild(p2);
    }
});
