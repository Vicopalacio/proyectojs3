function parImpar (numerito){
    if (numerito % 2 === 0){
        document.write("Este numero es par " + numerito);
    }else{document.write("Este numero es impar " + numerito)}
}

let numero = prompt("ingrese un numero");

parImpar (numero);