const alturaInput = document.querySelector('.altura') as HTMLInputElement;
const pesoInput = document.querySelector('.peso') as HTMLInputElement;
const calcular = document.querySelector('.calcularBtn') as HTMLButtonElement;

const resultado = document.querySelector('.resultado') as HTMLDivElement;
const erro = document.querySelector('.erro') as HTMLDivElement;

calcular.addEventListener('click', () => {
    const altura : number = Number(alturaInput.value);
    const alturaCM : number = altura/100
    const peso : number = Number(pesoInput.value);
    const IMC : number = peso / (alturaCM ** 2);
    const p : HTMLParagraphElement = document.createElement(`p`);
    const p2 : HTMLParagraphElement = document.createElement(`p`);
    
    
    erro.innerHTML = ``;
    resultado.innerHTML = ``;
    if (!altura || !peso) {
        p.innerText = `Altura  e peso devem ser especificadas!`;
        p.style.color = `#F3A50F`;
        erro.appendChild(p);

        return
    } 
    if (IMC < 18.5) {
        p.innerHTML = `${IMC.toFixed(2)}`;
        resultado.appendChild(p);
        p2.innerHTML = "Magreza";
        p2.style.color = "#0055FF";
        resultado.appendChild(p2);
    } else if (IMC < 25) {
        p.innerHTML = `${IMC.toFixed(2)}`;
        resultado.appendChild(p);
        p2.innerHTML = "Peso normal";
        p2.style.color = "#1cf13fff";
        resultado.appendChild(p2);
    } else if (IMC < 30) {
        p.innerHTML = `${IMC.toFixed(2)}`;
        resultado.appendChild(p);
        p2.innerHTML = "Sobrepeso";
        p2.style.color = "#f6ff00ff";
        resultado.appendChild(p2);
    } else if (IMC > 30) {
        p.innerHTML = `${IMC.toFixed(2)}`;
        resultado.appendChild(p);
        p2.innerHTML = "Obesidade";
        p2.style.color = "#ffd000ff";
        resultado.appendChild(p2);
    }
});