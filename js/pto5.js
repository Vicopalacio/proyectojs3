function texto (cadena){
    let resultado = cadena
    if (cadena === cadena.toUpperCase()){
        document.write("Este texto tiene mayusculas: " + resultado)
    } else if (cadena === cadena.toLowerCase()){
        document.write("Este texto tiene minusculas: " + resultado)
    }else {
        document.write("Este texto tiene mayus y minusculas: " + resultado)
    }
}

let usuario = prompt ("ingrese una frase");

texto (usuario)