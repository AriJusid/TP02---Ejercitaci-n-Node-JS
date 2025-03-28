export default class Persona {
    constructor(nombre, casado = false) { // casado tiene un valor default.
    this.nombre = nombre;
    this.casado = casado;
    }
    getNombre() {
    return this.nombre;
    }
    getCasado() {
    return this.casado;
    }
    getInformacion(){
    return `nombre:${this.nombre}, casado:${this.casado}`;
    }
    }