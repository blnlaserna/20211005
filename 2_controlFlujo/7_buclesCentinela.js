/* BUCLES CENTINELA */
//Una expresión lógica (centinela) sirve para decidir si se 
//repite el bucle o no.

let salir = false;
let n;
while (salir == false){
    n = parseInt(Math.random()*5 + 1);
    console.log(n);

    salir = (n%5 == 0);
}