//creo la clase para poder crear objetos


class rectangulo{
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    };
    mostrar(){
        console.log(`Alto: ${this.alto} - Ancho: ${this.ancho}`);
    };
    calcularPerimetro(){
        return 2 * (this.alto + this.ancho);
    };
    calcularArea(){
        return this.alto * this.ancho;
    };
    modificar(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    };
}
//creo el objeto (intancia una clase, objeto = instanciacion(new) de una clase).El objecto no puede
// ser creado sin crear la clase previamente, porque es la que define el objeto

//como creo eo rectangulo
const rectangulo1 = new rectangulo(6,18);
//si quiero solicitarle al usuario que ingrese los datos y generar el mismo rectangulo con distintas medidas
/*do {
    const alto = prompt("ingresar el alto deseado");
    const ancho = prompt("ingresar el ancho deseado");

    rectangulo1.modificar(alto, ancho);
    console.log("Perímetro:", rectangulo1.calcularPerimetro());
    console.log("Área:", rectangulo1.calcularArea());

} while (alto !== null)*/
rectangulo1.mostrar();
console.log("Perímetro:", rectangulo1.calcularPerimetro());
console.log("Área:", rectangulo1.calcularArea());

// Modificamos sus propiedades
rectangulo1.modificar(8, 4);

rectangulo1.mostrar();
console.log("Perímetro:", rectangulo1.calcularPerimetro());
console.log("Área:",rectangulo1.calcularArea());