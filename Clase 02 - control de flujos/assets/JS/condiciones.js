//IF Y OPERADORES MATEMATICOS//

let edad = 75;
let nombre = 'David Suarez';

if ( edad >=18){
    console.log(nombre+" tiene "+edad+" y es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres Millenial')
    }else if(edad >=70){
        console.log('Eres anciano')
    }else{
        console.log("No eres Millenial")
    }
    }

let year = 2018;

//EJEMPLO CON AND//

if(year >= 2000 && year <=2020){
    console.log("estamos en la era actual")
}else{
    console.log("Estamos en la era post moderna")
}

//EJEMPLO CON OR//

if(year == 2008 || (year >= 2018 && year == 2028) ){
    console.log("El año termina en 8")
}else{
    console.log("Año no registrado")
}

//NEGACIÓN//

if(!(year == 2018)){
    console.log("es el año 2018")
}else{
    console.log("este no es el año 2018")
}

//Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales//


let numero1 = parseInt(prompt("Numero 1"));
let numero2 = parseInt(prompt("Numero 2:"));

if (numero1 === numero2){
    alert("son iguales")
}else{
    if(numero1 > numero2){
        alert(numero1+" es mayor")
    }else{
        alert(numero2+" es mayor")
    }
}