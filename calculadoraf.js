
function A_triangulo()
{
    let base= document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
    let at=base*altura*0.5;
    alert('El area del triangulo es: '+at);
}

function P_triangulo()
{
    let lado1= parseFloat(document.getElementById("lado1").value); 
    let lado2= parseFloat(document.getElementById("lado2").value); 
    let lado3= parseFloat(document.getElementById("lado3").value); 
    let pt=lado1+lado2+lado3;
    alert('El preimetro del triangulo es:  '+pt);
}

function A_rectangulo()
{
    let lado_mayor = parseFloat(document.getElementById("lado_mayor").value); 
    let lado_menor = parseFloat(document.getElementById("lado_menor").value); 
    let arectangulo = lado_mayor*lado_menor;
    alert('El area del rectangulo es:  '+ arectangulo);
}

function P_rectangulo()
{
    let lado_mayor = parseFloat(document.getElementById("lado_mayor").value); 
    let lado_menor = parseFloat(document.getElementById("lado_menor").value); 
    let prectangulo = lado_mayor*2+lado_menor*2;
    alert('El area del rectangulo es:  '+ prectangulo);
}

function A_circulo()
{
    let radio = parseFloat(document.getElementById("radio").value); 
    let acirculo=3.1415*radio*radio;
    alert('El area del circulo es:  '+acirculo);
}

function P_circulo()
{
    let radio = parseFloat(document.getElementById("radio").value); 
    let pcirculo=2*3.1415*radio*radio;
    alert('El perimetro del circulo es:  '+pcirculo);
}