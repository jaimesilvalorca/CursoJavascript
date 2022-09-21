//For//

let numero = 100;

for(let i=0; i <=100; i++){
    console.log(i);
}

//while//

let year = 2022;

while(year <= 2055){
    console.log("estamois en año: "+year)

    if(year == 2000){
        break; //cuando sea 2000 la iteracion va a parar//
    }

    if(year == 2000){
        continue; //cuando sea 2000 la iteracion continuara
    }
    year++;
}

//do while//

//El buclo do while es diferente, primero ejecutamos un bloque de codigo y luego pasa a la condicion

let years = 30;

do{
    console.log(years)
    years--
}while(years > 25)

//switch
//estrucutra control de switch nos permite resumir varios if, trabaja en distintos casos

let edad = 40;
let imprime;

switch (edad){
    case 0:
        imprime = "Eres recien nacido"
    break;
    case 25:
        imprime = "Eres mayor de edad"
    break;

    default: //si no cumple ninguna condicion anterior hace esta//
        imprime= "Tu edad es neutra"
        break;

}

/*Ejecicio if while
hacer un programa, que nos diga
si un numero es par o impar
1.- una ventana prompt
2,. Si no es valido que nos vuelva a pedir de nuevo el mismo numero.

valor de retorno 
true si el valor dado es NaN de otro modo false

*/

let numberr = parseInt(prompt("introduce un numer",0)); //el 0 indica un valor por default

while (isNaN(numberr)){
    numberr = parseInt(prompt("Introduce un numero",0));
}

if (numberr % 2 == 0 ){
    alert("Es numero par")
}else{
    alert("Es numero impar")
}



let number = parseInt(prompt("Ingrese un numero para iniciar la tabla de multiplicar",0));
let limite = parseInt(prompt("Ingrese un numero hasta que numero quiere que llegue la tabla",0));
let x = 1;
let dato;


while (isNaN (number )){
    number = parseInt(prompt("Ingrese un numero para iniciar la tabla de multiplicar",0))
}

while (isNaN (limite )){
    limite = parseInt(prompt("Ingrese un numero hasta que numero quiere que llegue la tabla",0))
}

while (x <= limite){

    dato = x * number;    

    alert(x+" x "+number+" = "+dato);

    x = x+1;  
}



let num = parseInt(prompt("Ingrese un numero entero entre 1 y 20"))
let mensaje;


function verificar(numero){
    num = numero

    if( !isNaN(num)){

        if( num >= 1 && num <=20){
            mensaje = alert("El numero esta dentro del rango")
            operatoria(num)
        }else{
            while (num <1 || num > 20){
                mensaje = alert("El numero esta fuera del rango")
                num = parseInt(prompt("Ingrese un numero entero entre 1 y 20"))
            }
        }
    }else{
        mensaje = alert("Debes ingresar solo numeros");
        num = parseInt(prompt("Ingrese un numero entero entre 1 y 20"))
        verificar(num)
    }
}



function operatoria (num){

    //Multiplicación
    for(let i = 1; i<=num; i++){
        let multiplicacion = i*num;
        console.log(`${i} x ${num} = ${multiplicacion}`)
    }
}

verificar(num)


for (var j = 0 ; j < 10; j++){
    if ((j === 2 || j ===6)){
        console.log("Hola coder"+j)
    }

}