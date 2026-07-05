// crear un objeto llamado auto que tenga algunas caracteristicas como el color, marca,
// model y si esta enendido o apagado. crea los métodos necesarios para permitir encender y
// apagar el auto.


const auto = {
    color: "negro",
    marca: "Volvo",
    modelo: "2026",
    encendido: false,


    enceder: function () {
        this.encendido = true;
        return "encendido";
    },

    apagar: function (){
        this.encendido = false;
        return "apagado";
    }
}
const pantalla = document.getElementById("pantalla");

pantalla.innerHTML += `El auto está: ${auto.enceder()}<br/>`
pantalla.innerHTML += `El auto está: ${auto.apagar()}`
