const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event) {
   // console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}



















// HTML CON JAVA SCRIPT
// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafo1,
//     pid,
//     input,
// });

// h1.innerHTML = 'Pato <br>';
// h1.innerText = 'Pato <br>';

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// input.value="456";

// const img = document.createElement('img');
// img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
// console.log(img);
// pid.innerHTML="";
// pid.appendChild(img);