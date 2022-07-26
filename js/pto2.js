let ciudades = [];

do{
    let city = prompt("Ingrese nombre de ciudades");
    ciudades.push(city);
}while(confirm("Desea ingresar mas ciudades?"));
    document.write(ciudades)
    ciudades.push("Paris")
    document.write(ciudades[2]);
    ciudades.splice(2,0,"Barcelona")
