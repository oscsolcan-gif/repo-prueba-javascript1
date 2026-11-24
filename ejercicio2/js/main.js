// Ejercicio 2
// Declara una función que acepte un nombre como parámetro
// y devuelva el número de palabras que tiene el nombre.
// Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
// (Enunciado tal como lo tengo anotado del campus; no está en el repo de Héctor)

// Función declarada (tema 1.3.6)
function Ejercicio2(nombre) {

    // trim() quita los espacios sobrantes del principio y del final,
    // para que " Ana " no cuente palabras de más
    // split(" ") parte el nombre por los espacios y devuelve un array
    // con una palabra en cada posición (tema 1.3.7)
    // CORRECCIÓN: antes tenía escrito "spplit" (con dos p) y daba error
    const arrayPalabras = nombre.trim().split(" ");

    // length da el número de elementos del array = número de palabras
    const cantidadPalabras = arrayPalabras.length;

    // CORRECCIÓN: el enunciado dice "devuelva", así que uso return
    // en vez de solo console.log dentro de la función
    return cantidadPalabras;
}

// Pruebo la función y guardo lo que devuelve
const resultado = Ejercicio2("Jesús Alberto José");

// Imprimo por consola: Imprime 3
console.log(resultado);

// ...y en la página (tema 1.3.11, DOM)
document.getElementById("resultado").textContent = "Número de palabras: " + resultado;

// Ejemplo del enunciado: "Antonio Alberto Jesús" devuelve 3
console.log(Ejercicio2("Antonio Alberto Jesús"));
