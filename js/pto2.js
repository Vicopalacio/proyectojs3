let ciudades = [];

do{
    let city = prompt("Ingrese nombre de ciudades");
    ciudades.push(city);
}while(confirm("Desea ingresar mas ciudades?"));
    document.write(ciudades.length)
    document.write(ciudades.push("Paris"));