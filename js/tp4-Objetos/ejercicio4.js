//creo la clase producto para luego crear el objeto
class producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimir() {
        console.log(`Coódigo: ${this.codigo} - Nombre: ${this.nombre} - Precio $${this.precio}`);
    };
}

//creo tres productos
const prod1 = new producto(1, "Mate", 45000);
const prod2 = new producto(2, "Termo", 115000);
const prod3 = new producto(3, "bombilla plata", 85000);

//guardo los productos en un array
const productos = [prod1, prod2, prod3];

//muestro los datos de los tres utilizando el metodo
for (let i = 0; i < productos.length; i++){
    productos[i].imprimir();
}