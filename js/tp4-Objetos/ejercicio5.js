const generaciones = [
    {
        nombre: "Generación Beta",
        desde: 2025,
        hasta: 2039,
        poblacion: 650000,
        circunstancia: "Consolidación de la IA y sostenibilidad global",
        rasgo: "Adaptabilidad"
    },
    {
        nombre: "Generación Alfa",
        desde: 2011,
        hasta: 2024,
        poblacion: 5400000,
        circunstancia: "Pandemia COVID-19 y auge de la IA generativa",
        rasgo: "Hiperconectividad"
    },
    {
        nombre: "Generación Z",
        desde: 1994,
        hasta: 2010,
        poblacion: 7800000,
        circunstancia: "Expansión masiva de internet",
        rasgo: "Irreverencia"
    },
    {
        nombre: "Generación Y (millennials)",
        desde: 1981,
        hasta: 1993,
        poblacion: 7200000,
        circunstancia: "Inicio de la digitalización",
        rasgo: "Frustración"
    },
    {
        nombre: "Generación X",
        desde: 1969,
        hasta: 1980,
        poblacion: 9300000,
        circunstancia: "Crisis del 73 y transición española",
        rasgo: "Obsesión por el éxito"
    },
    {
        nombre: "Baby Boom",
        desde: 1949,
        hasta: 1968,
        poblacion: 12200000,
        circunstancia: "Paz y explosión demográfica",
        rasgo: "Ambición"
    },
    {
        nombre: "Silent Generation (Posguerra)",
        desde: 1930,
        hasta: 1948,
        poblacion: 6300000,
        circunstancia: "Conflictos bélicos y dictadura",
        rasgo: "Austeridad"
    }
];


class Persona {
    constructor(nombre, apellido, edad, dni, genero, peso, altura, anioNacimiento, ciudadNacimiento, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.ciudadNacimiento = ciudadNacimiento;
        this.pais = pais;
    }

    mostrarGeneracion() {
        for (let i = 0; i < generaciones.length; i++) {
            if (this.anioNacimiento >= generaciones[i].desde && this.anioNacimiento <= generaciones[i].hasta) {
                return generaciones[i].nombre + " - " + generaciones[i].rasgo
            }
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad`;
        } else {
            return `${this.nombre} es menor de edad`;
        }
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, genero: ${this.genero}, Peso: ${this.peso}kg, Altura: ${this.altura}m, Año de nacimiento: ${this.anioNacimiento}`;
    };

    generaDNI() {
        return Math.floor(10000000 + Math.random() * 90000000);
    };
}

const persona1 = new Persona(
    "Maria",
    "Hernandez",
    41,
    30954893,
    "M",
    80,
    167,
    1984,
    "Rauch",
    "Argentina"

)
const persona2 = new Persona(
    "Sofia",
    "Perez",
    20,
    45095893,
    "M",
    65,
    157,
    2006,
    "La plata",
    "Argentina"

)

const persona3 = new Persona(
    "Juan",
    "Sanchez",
    56,
    20095893,
    "H",
    75,
    177,
    1970,
    "Rosario",
    "Argentina"

)

console.log(persona1.mostrarDatos());
console.log(persona1.esMayorDeEdad());
console.log(persona1.mostrarGeneracion());

console.log(persona2.mostrarDatos());
console.log(persona2.esMayorDeEdad());
console.log(persona2.mostrarGeneracion());

console.log(persona3.mostrarDatos());
console.log(persona3.esMayorDeEdad());
console.log(persona3.mostrarGeneracion());3
