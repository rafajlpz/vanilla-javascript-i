"use strict";
// -------------------------// // EJERCICIO 1-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let myname = "rafa"
// console.log(myname)

// // // EJERCICIO 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// myname = "rafael"
// console.log(myname)

// // //EJERCICIO 3//

// // myname = "rafael"
// // console.log(myname)  AL COMENTARLO DA ERROR

// //EJERCICIO 4

// let operador1 = 1;
// let operador2 = 2;
// let resultado = 0;

// resultado=operador1-operador2;
// console.log(resultado);

// operador1 = 4;
// console.log(operador1-operador2);
// console.log(resultado); ------------------------

// //EJERCICIO 1 PROFESOR//
// const pi = 3.1416;
// let area,radio = 0;


// radio=parseFloat(prompt("Ingresar el radio")); 

// area=pi*radio*radio;

// alert ("El area es "+area);

// O----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = 0, r = 2;
// const pi = 3.1416;
// a = pi*r*r;
// // console.log(a);
// console.log(`A = Π x ${r}² = ${a}`); //PARA QUE SE VEA BONITO SE USA ESTE CONSOLELOG


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //EJERCICIO 2 PROFESOR//
// const ej2profe = document.querySelector(".area-triangulo");
// const res2profe = document.querySelector("#resultado2");

// const areaTriangulo = () =>{
//     //alert() Para ver si hemos cogido el boton con alert
//     let areatri = 0;
//     let base = 3, altura = 2;
//     base = prompt("Dame la base");
//     //Number convierte cualquier cosa en numero
//     base = Number(base);
//     altura = prompt("dame la altura")
//     altura = Number(altura);

//     areatri = (base*altura)/2;
//     res2profe.innerHTML = `<code>
//     A(${base}*${altura}/2) = ${areatri}
//     </code>`;
// }


// ej2profe.addEventListener(
//     "click",
//     areaTriangulo
// );


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//EJERCIO 3 PROFESOR//
const ej3profe = document.querySelector(".persona-altura");
const res3profe = document.querySelector("#resultado3");

const esPersonaAlta = () =>{
    let altura = prompt("Dame tu altura en cm");
    // console.log(`altura ${altura} es de tipo ${typeof altura}`); typeof nos dice que tipo de dato es
    altura = Number(altura);
    // console.log(`altura ${altura} es de tipo ${typeof altura}`);

    if(altura>200){
        res3profe.innerHTML = `La persona de ${altura} cm es alta`
    }else{
        res3profe.innerHTML = `La persona de ${altura} cm es baja`
    }
};


ej3profe.addEventListener(
    "click",
    esPersonaAlta
);




