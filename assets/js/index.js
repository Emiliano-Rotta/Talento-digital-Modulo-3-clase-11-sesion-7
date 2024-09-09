// //Repaso de la case pasada:

// //Filter

// let numeros = [1, 2, 3, 4]
// // let mayorTres = numeros.filter(function(num){
// //     return num > 2
// // }) Es lo mismo que hacer
// let mayorTres = numeros.filter((num)=> num > 2)

// console.log(mayorTres)


// //includes
// let contieneCuatro = numeros.includes(4)
// console.log(contieneCuatro)

// //concat
// let letras = ['a', 'b', 'c', 'd']

// let combinado = numeros.concat(letras)
// console.log(combinado)

// //map
// let multiplicacion = numeros.map((num)=> num*2)
// console.log(multiplicacion)

//----------------------------------------------
// Métodos del prototipo String. replaceAll() trimStart() trimEnd()


// replaceAll()

let alumnosChat = `Nombre Rodolfo, nombre Juan y nombre Carlos` 

//Sintaxis: variable.replaceAll("palabraACambiar", "nuevaPalabra")

// console.log(alumnosChat)
// console.log(alumnosChat.replaceAll("nombre", "Alumno"))



// console.log(alumnosChat.replaceAll(/nombre/gi, (match) => {
//     if (match === "Nombre")return "Alumno"
//     if (match === "nombre")return "alumno"
// }))


// let fruta = "Palta, pera, banana, palta"
// let patron = /palta/gi

// console.log(fruta.replaceAll(patron, (p)=>{
//     if(p === "Palta")return "Aguacate"
//     if(p === "palta")return "aguacate"
// }))


//------- replace()-----

// console.log(alumnosChat.replace("nombre", "Alumno"))


//----------------------------------------------

// trimStart() -->elimina los espacios en blanco los que se encuentran al principio
// trimEnd()   -->elimina los espacios en blanco los que se encuentran al final

//Sintaxis: stringAModificar.metodo

let string = " Javascript "

// trimStart()
// let stringStart = string.trimStart()

// console.log({stringStart})

//trimEnd()
// let stringEnd = string.trimEnd()

// console.log({stringEnd})

//trim()
// let stringEnd = string.trim()

// console.log({stringEnd})

// Ejercicio 1: Reemplazo de caracteres en una frase
// Consigna: Dada una frase, reemplaza todas las ocurrencias de la palabra "sol" por "luna".
// const frase = "El sol brilla como un sol radiante en el cielo.";


//--------------------------------------
// Ejercicio 2: Reemplazo de espacios al principio y al final de una frase
// Consigna: Elimina los espacios al inicio y al final de la frase " Hola Mundo ".


//-----------------------------
// Ejercicio 3: Reemplazo de palabras en un párrafo
// Consigna: Reemplaza la primera ocurrencia de la palabra "JavaScript" por "JS" en el siguiente párrafo: "JavaScript es un lenguaje de programación. JavaScript es usado ampliamente."

//--------------------------------------
// Ejercicio 4: Eliminación de espacios innecesarios
// Consigna: Dada la frase " JavaScript ", reemplaza todas las ocurrencias de " " (espacio) por "-".

// const frase = "  JavaScript  ";

//--------------------------------------
// Ejercicio 5: Formateo de una cadena
// Consigna: Dada una cadena " Hola Mundo ", elimina los espacios al principio y al final, y reemplaza los espacios intermedios por un guion bajo "_".

// const cadena = "  Hola   Mundo  ";