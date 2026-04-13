function MostrarMeses(){
    const Meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","dieciembre"];
    console.log(Meses);
}

var suma = 0, resta = 0, división = 0, multiplicación = 0, potencia = 0;

function ejercicio2(){
    var valores = [true, 5, false, "hola", "adios",2];

    if(valores[3] < valores[4])
        {
        console.log(valores[4], " es menor que ", valores[3]);
    }

    else if(valores[3] > valores[4]){
        console.log(valores[3], " es mayor que ", valores[4]);
    }

    suma = (valores[1] + valores[5])
    resta = (valores[1] - valores[5])
    división = (valores[1] / valores[5])
    multiplicación = (valores[1] * valores[5])
    potencia = (valores[1] ** valores[5])

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

    console.log(numero1 + " no es mayor que " + numero2);

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

    var numero = prompt("ingrese un número:")
     
    if(numero == null || isNaN(numero) || numero == "" || numero == 0)
    {
        console.log("Lo ingresado no es valido")
    }

    else if(numero % 2 == 0){

        console.log("el número es: ", numero)
        console.log("el número es par")
    }

    else{
        console.log("el numero es impar")
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
/*EJERCICIO 9
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que
muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el
método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento
de la jerarquía.*/
function ejercicio9(){
    let p1= new Persona ("mauro", 67, "Masculino");
    console.log(p1.obtDetalles());

    let p2 = new Estudiante ("Lautaro", 15, "Femenino", "Programación", "1°A");
    console.log(p2.obtDetalles());
    console.log(p2.registrar());

    let p3 = new Profesor ("Santiago", 45, "Masculino", "Matemática", "Secundario");
    console.log(p3.obtDetalles());
    console.log(p3.asignar());
}

    function Persona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
    }

    function Estudiante(nombre, edad, genero, curso, grupo){
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.registrar = function(){
        console.log(`El estudiante se ha registrado en el curso: ${this.curso} y grupo: ${this.grupo}`);
    }

    function Profesor(nombre, edad, genero, asignatura, nivel){
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;

    Profesor.prototype.asignar = function(){
        console.log(`El profesor ${this.nombre} ha sido asignado a la asignatura: ${this.asignatura} con nivel: ${this.nivel}`);
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