let salir = false;
let n;
let i = 1;
while (salir == false && i <=5) {
    n = parseInt(Math.random()*500 + 1);
    console.log(n);
    i++;
    salir = (n%7 == 0);
}