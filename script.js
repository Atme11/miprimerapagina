//practica
//alert("Hola este es mi Javascript");
// let contenidotitulo = "ross";
// let titulo = document.querySelector(".logo .fuente-acento");
// titulo.innerHTML=contenidotitulo;
// //console.log(titulo);

// //Condicionales
// let textotitulo=titulo.innerText;
// console.log(textotitulo);

// if (textotitulo =="Franco"){
//     titulo.innerHTML = "Franco Atme";
// } else {
//     console.log("no se cumple");
// }
//---------------
//---modificando texto de acerca de mi--
let acercatitulo = "Acerca de mí";
let titulo2=document.querySelector(".acerca-titulo");
titulo2.innerText = acercatitulo;

if(acercatitulo =="Acerca de mí"){
    console.log("cumple");
}else{
    console.log("No se cumple");
}
let nombre = "Franco";
let ciudad = "Lima";
let gusto = "galletas";

let parrafo = document.querySelector(".parrafo1");
function cambiarTexto(nombre,ciudad,gusto){
    let contenido = `¡Bienvenido a mi página! 
    Aquí, aprenderás más sobre mi.Me llamo ${nombre}, naci en ${ciudad}.
    Me gusta el ${gusto} y salir a pasear.
    Me encanta programar para poder ayudar a las personas.`;

    return contenido;
}
parrafo.innerText=cambiarTexto(nombre,ciudad,gusto);