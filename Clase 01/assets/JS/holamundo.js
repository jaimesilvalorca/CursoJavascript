alert("Hola mundo"); /* alerta */
confirm("eres mayor de edad?"); /* alerta */
prompt("Ingresa tu edad"); /* ingreso de dato (imput) */

//variables//

let pais = "Chile"; //ya no se usar el var//
var continente = "America"; //var ya no se usa//
let antiguedad = 1800;
//let pais_y_continente = pais+continente; //salida chileamerica//
let pais_y_continente = `${pais} ${continente}`; //salida chileamerica x+6//
pais = 'España'; //carga nueva palabra en la variable//
continente = 'Europa'; //carga nueva palabra en la variable//


document.write("<h1>Hola mundo desde fichero externo</h1>");

console.log("esto muestra por consola");
console.log(80+20);
console.log(pais_y_continente);
console.log(pais,continente,antiguedad, 'pais y continente', pais_y_continente);


var texto1 = "Curso de Javascript";
console.log(texto1);
{
    var texto1 = "Curso de larabel 5";
    console.log(texto1);

}
console.log(texto1);

console.log("-------------------------------------------------")

let texto2 = "Curso de Javascript";
console.log(texto2);
{
    let texto2 = "Curso de larabel 5";
    console.log(texto2);
}

console.log(texto2);


