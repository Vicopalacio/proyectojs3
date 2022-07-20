//let dado1 = Math.floor(Math.random()*(max - min + 1) + min);
// let dado1 = Math.floor(Math.random()*(6 - 1 + 1)+1);
// let dado2 = Math.floor(Math.random()*(6 - 1 + 1)+1);
// console.log(dado1)
// console.log(dado2)

//let resultado = dado1 + dado2;
let sumas = []
let pruebaDado1 = []
let pruebaDado2 = []

for(let i = 0; i < 50; i++){
    let dado1 = Math.floor(Math.random()*(6 - 1 + 1)+1);
    let dado2 = Math.floor(Math.random()*(6 - 1 + 1)+1);
    let resultado = dado1 + dado2;
    sumas.push(resultado);
    pruebaDado1.push(dado1)
    pruebaDado2.push(dado2)
}
document.write("<br>suma : " + sumas);
document.write("<br>resultado dado 1: " + pruebaDado1);
document.write("<br>resultado dado 1: " + pruebaDado2);