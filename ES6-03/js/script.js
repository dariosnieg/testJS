class Vehiculo {

    constructor(id='sin patente', nasta=100) {
        this.patente = id;
        this.nafta = nasta;
    }
    
    manejar(km) {
        console.log(`[${this.patente}] Estoy por manejar ${km}km...`)
    }
}

class Auto extends Vehiculo{
    manejar(km) {
        super.manejar(km);
        this.nafta=this.nafta-km;
        console.log(`[${this.patente}] Me quedan ${this.nafta} litros de nafta...`)
    }
}

class Moto extends Vehiculo{
    manejar(km) {
        super.manejar(km);
        this.nafta=this.nafta-km/2;
        console.log(`[${this.patente}] Me quedan ${this.nafta} litros de nafta...`)
    }
    
}

class Bicicleta extends Vehiculo{
    constructor() {
        super(); //llamá al constructor de la clase padre, sirve para llamar a algo de la clase padre.
        this.patente = 'Soy una bici, no tengo patente';
    }
    manejar(km) {
        super.manejar(km);
        //La bicicleta no gasta nafta
        //this.nafta=this.nafta-km/2;
        console.log(`[${this.patente}] No gasté nafta, soy ecológico...`)
    }
}

const auto = new Auto('AA123BV', 100);
auto.manejar(10);
auto.manejar(30);

const otroAuto = new Auto('CA123BC', 200);
otroAuto.manejar(10);
otroAuto.manejar(50);

const moto = new  Moto('MOTO');
moto.manejar(20);

const bici = new Bicicleta('000');
bici.manejar(30);

/*
const auto = {
    patente: 'AB123AB',
    nafta: 100,
    manejar(km){
        // gasta 1lt x km
        console.log(`Estoy por manejar ${km}km...`)
        this.nafta=this.nafta-km;
        console.log(`Me quedan ${this.nafta} litros de nafta...`)
    }
};

console.log(auto.manejar(10));
console.log(auto.manejar(30));


const moto = {
    patente: 'BC321AB',
    nafta: 80,
    manejar(km){
        // gasta 1 lt cada 2 km
        console.log(`Estoy por manejar ${km}km...`)
        this.nafta=this.nafta- km/2;
        console.log(`Me quedan ${this.nafta} litros de nafta...`)
    }
};

console.log(moto.manejar(10));
console.log(moto.manejar(30));
*/