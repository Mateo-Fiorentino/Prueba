function MostrarMeses(){
    const Meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","dieciembre"];
    console.log(Meses);
}

var suma = 0, resta = 0, división = 0, multiplicación = 0, potencia = 0;

function ejercicio2(){
    var valores = [true, 5, false, "hola", "adios",2];
    
    suma = (valores[1] + valores[5])
    resta = (valores[1] - valores[5])
    división = (valores[1] / valores[5])
    multiplicación = (valores[1] * valores[5])
    potencia = (valores[1] ** valores[5])

    console.log("el texto mayor es: ", valores[4]);
    console.log("suma: ", suma);
    console.log("resta: ", resta);
    console.log("división: ", división);
    console.log("multiplicación: ", multiplicación);
    console.log("potencia: ", potencia);

    console.log(valores);

}
function ejercicio3(){

    var numero1 = 5;
    var numero2 = 8;

    if(numero1 < numero2) {

    console.log("numero1 no es mayor que numero2");

 }
    if(numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if(numero1 < 0 || numero1 !== 0) 
    {
     console.log("numero1 es negativo o distinto de cero");
    }
    if((numero1 + 1) < numero2 || (numero1 + 1) !== numero2) 
    {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

function ejercicio4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];

    var dni = prompt("Escribe tu DNI: ")

    if(dni == null || isNaN(dni) || dni == "" || dni < 0 || dni > 99999999)
    {
        console.log("El número proporcionado no es válido");
    }

    else
    {
        var resto = dni % 23;

    console.log("Resto: ", resto); 
    console.log("Letra: ", letras[resto]);
    }
}

function ejercicio5(){
    
    var resultado = 1;
    var numero = prompt("ingrese un número ");

    if(numero == null || isNaN(numero) || numero == "" || numero == 0){
        console.log("el caracter ingresado no es valido");
    }

    else{

        for(var i = 1; i <= numero; i++)
        {
            resultado = resultado * i;
        }
        console.log("El Factorial es: ", resultado)
    }
}

function ejercicio6(){

    var numero = prompt("ingrese un número:");
     
    if(numero == null || isNaN(numero) || numero == "" || numero == 0)
    {
        console.log("Lo ingresado no es valido");
    }

    else if(numero % 2 === 0){

        document.writeln("el número es: ", numero);
        document.writeln("el número es par");
    }

    else{
        document.writeln("el numero es impar");
    }
}

function ejercicio7(){

var texto = prompt("ingrese una palabra:");

     if(texto == null || !isNaN(texto) || texto == "" )
    {
        console.log("Lo ingresado no es valido");
    }


    if(texto === texto.toUpperCase()){
        console.log("El texto esta formado por Mayúsculas")
    }

    else if(texto === texto.toLowerCase()){
        console.log("El texto esta formado por Minúsculas")
    }

    else{
        console.log("El texto esta formado por una mezcla de mayúsculas y minúsculas")
    }
}

function ejercicio8(){
    let texto = prompt("ingrese un texto:");
    let str = texto.replaceAll(" "," ").toLocaleLowerCase();
    let arrStr = str.split("").reverse().join("");

    if (str == arrStr){
        console.log("El texto ingresado es un palindromo");
    }
    else{
        console.log("El texto ingresado no es un palindromo");
    }
}

function ejercicio10(){
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(var i = 0; i < 36000; i++){
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        arr[suma] = arr[suma] + 1;
    }

    console.log(arr);

    for(let j = 2; j < 13; j++){
        console.log("El número " + j + " salió: " + arr [j] + " veces en total.");
    }
}