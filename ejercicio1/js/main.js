


// Ejercicio 1  //
// Declara una función que acepte una palabra como parámetro
//  y la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
// Ejemplo: Para "Ana" devolverá "A N A".

// para declarar una función:

// EMPIEZA

//    1- Pedir palabra

function Ejercicio1 (palabra) {

    // hago el array para el palabro//

    let ArraypartirPal = palabra.split("")

    // hago el string - que son el array de letra anteriores y lo
    // lo convierto en una estring, con el join e entre comillas un espacio que hará
    // que salga con espacios//

    let SepPalabro = ArraypartirPal.join(" ")

    let palabraMay = SepPalabro.toUpperCase()  // la convierto en mayusculas //

    return palabraMay

    // esto me sobra pero es lo que meto dentro del return//
    //palabra.toUpperCase()

   // return SepPalabro

}



console.log(Ejercicio1 ("oscar"));

//    2- Que la devuelva en mayúsculas




//    3- Separar las letras con espacios entre ellas, esa palabra



//    4 imprimir en pantalla la palabra final



//    FIN


