// Código del cuadrado
console.group("Cuadrado")
function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulo")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo

console.group("Círculo")

//diametro
function diametroCirculo(radio){
    return radio *2
}

//pi
const PI = Math.PI

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();

//Aqui interactuamos con HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const ResultPerimetroCuadrado = document.getElementById("ResultPerimetroCuadrado");
    
    ResultPerimetroCuadrado.innerText = "El perimetro del cuadrado es " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const ResultAreaCuadrado = document.getElementById("ResultAreaCuadrado");
    ResultAreaCuadrado.innerText = "El área del cuadrado es " + area;
}

//Triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    const ResultPerimetroTriangulo = document.getElementById("ResultPerimetroTriangulo");
    ResultPerimetroTriangulo.innerText = "El perimetro del triángulo es " + perimetro;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("inputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    const ResultAreaTriangulo = document.getElementById("ResultAreaTriangulo");
    ResultAreaTriangulo.innerText = "El área del triángulo es " + area;
}
//Círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    const ResultPerimetroCirculo = document.getElementById("ResultPerimetroCirculo");
    ResultPerimetroCirculo.innerText = "El perimetro del círculo es " + perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    const ResultAreaCirculo = document.getElementById("ResultAreaCirculo");
    ResultAreaCirculo.innerText = "El área del círculo es " + area;
}
