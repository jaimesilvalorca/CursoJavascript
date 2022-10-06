//fuciones en ECM5

function calculadora (){
    //console.log("hola soy una calculadora")
    //console.log("hola estamos aprendiendo javascript")
    let mensaje = document.write("<h1>hola soy una calculadora</h1>")
    return mensaje;
}

calculadora ();

//fuciones en ECM6

const retornarNum = () => {
    return 3;
}

console.log(retornarNum());


function sumar(num1,num2){
    let proceso = num1+num2
    console.log(proceso)
    return proceso //retorno del valor de la funcion
}

const salida = sumar(30,1000) // salida toma el valor de proceso
console.log(salida) // salida toma el valor de proceso pero puede salir como una variable global

function calculadora (numero1,numero2,numero3=100,numero4=0){ // variable = algo es para asignar valores por default, si no se agrega algo, se le asigna el default
    console.log('Suma ' +(numero1+numero2))
    console.log('Resta '+(numero1-numero2))
    console.log('multiplicacion '+(numero1*numero2))
    console.log('division '+(numero1/numero2)) 
    return numero1+numero2+numero3+numero4

}

const exitt = calculadora (100,10)
console.log(exitt)
