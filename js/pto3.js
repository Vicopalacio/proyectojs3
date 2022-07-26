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
document.write("<br>resultado dado 1: " + pruebaDado1);
document.write("<br>resultado dado 1: " + pruebaDado2);
document.write("<br>suma : " + sumas);

document.write(`<table class="tablaDatos">
<thead>
    <tr>
        <th>Resultados</th>
        <th>Frecuencia</th>
    </tr>
</thead>
<tbody>`);
//dibujar todas las filas que necesitamos
for(let i = 2; i <= 12; i++){
    document.write(`<tr>`);
    let contador = 0;
//necesito calcular la frecuencia de apariciones de mi variable i
    for(let posicion = 0; posicion < sumas.length; posicion++){
        if(i === sumas[posicion]){
            contador++;
        }
    }
        document.write(`
            <td>${i}</td>
            <td>${contador}</td>`);
        document.write(`</tr>`);
}
document.write(`</tbody>
</table>`);