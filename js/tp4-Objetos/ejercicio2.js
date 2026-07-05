const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function (cantidad) {
        this.saldo += cantidad;
        console.log(`Se ingresaron $${cantidad}. Saldo actual: $${this.saldo}`);
    },
    extraer: function (cantidad) {
        if (this.saldo < cantidad) {
            console.log("saldo insuficiente")
        }else {
            this.saldo -= cantidad
            console.log(`Se extrajeron $${cantidad}. Saldo actual: $${this.saldo}`);
        }
    },
    informar: function (){
        return `Titular: ${this.titular} - Saldo: $${this.saldo}`;
    }
}
const pantalla = document.getElementById("pantalla");

pantalla.innerHTML += `<p>${cuenta.informar()}</p>`;

cuenta.ingresar(800);
cuenta.extraer(200);

pantalla.innerHTML += `<p>${cuenta.informar()}</p>`;