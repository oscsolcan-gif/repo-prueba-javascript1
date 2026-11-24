// Ejercicio 1
// Declara una función que acepte una palabra como parámetro
// y la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
// Ejemplo: Para "Ana" devolverá "A N A".
// (Enunciado tal como lo tengo anotado del campus; no está en el repo de Héctor)

// PSEUDOCÓDIGO (tema 1.3.2)
// EMPIEZA
//    1- Pedir palabra (parámetro de la función)
//    2- Que la devuelva en mayúsculas
//    3- Separar las letras con espacios entre ellas
//    4- Imprimir en pantalla la palabra final
// FIN

// Función declarada (tema 1.3.6): recibe la palabra y devuelve el resultado
function Ejercicio1(palabra) {

    // split("") parte el string en un array con una letra en cada posición
    // "oscar" -> ["o","s","c","a","r"]  (tema 1.3.7, arrays)
    let ArraypartirPal = palabra.split("");

    // join(" ") vuelve a unir el array en un string poniendo un espacio
    // entre cada letra: "o s c a r"
    let SepPalabro = ArraypartirPal.join(" ");

    // toUpperCase() convierte el texto a mayúsculas: "O S C A R"
    let palabraMay = SepPalabro.toUpperCase();

    // devuelvo el resultado con return
    return palabraMay;
}

// Llamo a la función con mi nombre y guardo lo que devuelve
let resultado = Ejercicio1("oscar");

// 4- Imprimir: por la consola del navegador...
console.log(resultado); // Imprime: O S C A R

// ...y en la página, en el párrafo con id "resultado" (tema 1.3.11, DOM)
document.getElementById("resultado").textContent = resultado;

// Otra prueba con el ejemplo del enunciado: "Ana" -> "A N A"
console.log(Ejercicio1("Ana"));
