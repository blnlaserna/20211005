/* ABANDONAR UN BUCLE */
//Instrucción break (cuidadín)

let m=parseInt(Math.random()*10) + 1;
for (let i=1;i<=100;i++){
    console.log(`i=${i}, m=${m}`);
    if (m == 10){
        break;
    }
    m=parseInt(Math.random()*10)+1;
}