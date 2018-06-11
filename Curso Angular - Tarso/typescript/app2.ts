class Spacecraft {

    constructor (public propulsor: string) {}

    jumpIntohyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntohyperspace()

class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 14
    }

    jumpIntohyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntohyperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}

let falcon = new MillenniumFalcon()
falcon.jumpIntohyperspace()

interface Containership{
    
    cargoContainers: number
}


let goodForTherJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTherJob(falcon) ? 'YES' : 'NO'}`)