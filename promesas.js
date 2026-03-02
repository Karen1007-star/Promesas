// // 1️⃣ Promesa básica
// // Crea una promesa que se resuelva después de 3 segundos con el mensaje:

// console.log("conectado")

// async function ejecutar() {
//   const resultado = await new Promise((res, rej) => {
//     setTimeout(() => {
//       res("¡Hola promesa!");
//     }, 1000);
//   });
//   console.log(resultado); // imprime el valor resuelto
// }

// ejecutar(); // llamamos a la función una vez

// // 2️⃣ Retorno de valor
// // Crea una función async sumar(a, b) que:
// // Devuelva la suma de a + b usando return
// // Llama a la función y usa await en otra función async para imprimir el resultado

// function sumar(a,b){
//     return new Promise ((res, rej)=>{
//            setTimeout(()=>{res(a+b)}, 2000)
//     }) 
// }

// async function resultado() {
//    console.log(await sumar(2,3)) 
// }
// (resultado())

// // 3️⃣ Simular fetch
// // Crea una función async traerUsuarios() que:
// // Espere 1 segundo
// // Devuelva un array de usuarios, por ejemplo: ["Juan", "Ana", "Pedro"]
// // Imprime los usuarios con console.log usando await

// const usuarios = ["Juan", "Ana", "Pedro"]


// function traerUsuarios() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(usuarios); // resuelve la promesa después de 1 segundo
//     }, 1000);
//   });
// }

// async function mostrarUsuarios() {
//   const lista = await traerUsuarios(); // espera la promesa
//   console.log(lista);                  // imprime ["Juan", "Ana", "Pedro"]
// }

// mostrarUsuarios();

// // 4️⃣ Manejo de errores con try/catch
// // Crea una función async revisarEdad(edad) que:
// // Si edad >= 18, devuelva "Puede pasar"
// // Si edad < 18, lance un error "No puede pasar"
// // Llama a la función dentro de otra función async usando try/catch para imprimir:

// function mayor(edad){
//   try {
//     if (edad >= 18) {
//       return "Puede pasar";
//     } else {
//       throw new Error("No puede pasar");
//     }
//   } catch (error) {
//     return `Error: ${error.message}`;
//   }
// }

// // Función async para probar
// async function ejecutar1() {
//   const resultado1 = await mayor(20);
//   console.log(resultado1); // Puede pasar

//   const resultado2 = await mayor(15);
//   console.log(resultado2); // Error: No puede pasar
// }

// ejecutar1();


// 1️⃣ Promesa simple
// Crea una promesa que:
// Se resuelva después de 2 segundos con el mensaje "¡Hola mundo!"
// Usa .then() para imprimir el mensaje

// function promesas1(){
//     new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Hola MUndo");
//         }, 2000)
//     })
//       .then((mensaje) => {
//             console.log(mensaje); // Imprime el mensaje cuando se resuelva la promesa
//         });
// }

// promesas1()

function promesas1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Hola MUndo");
        }, 2000)
    })
}

async function resuelve(){
    const resultado = await promesas1()
    console.log(resultado)
}

resuelve()

// 1️⃣ Promesa simple con setTimeout
// Crea una función esperar(ms) que devuelva una promesa que se resuelva después de ms milisegundos con el mensaje "Tiempo cumplido".
// Llama a la función con 2 segundos y usa await para imprimir el mensaje.


function promesa2(ms){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            res("tiempo cumplido")
        }, ms*1000)
    })
}

async function esperar(){
    const resultado = await promesa2(3)
    console.log(resultado)
}
esperar()

// 2️⃣ Promesa con cálculo
// Crea una función sumar(a, b) que devuelva una promesa que se resuelva con la suma de a + b después de 1 segundo.
// Llama a la función usando await e imprime el resultado.

function promesa3(a,b){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(a+b)
        }, 1000);
    })
}

async function calculo(){
    const resul1 = await promesa3(2,3)
    console.log(resul1)
    const resul2 = await promesa3(3,3)
    console.log(resul2)
} 

calculo()