class Spacecraft {

    constructor (public propulsor: string) {}

    jumpIntohyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface Containership{
    
    cargoContainers: number
}

export {Spacecraft, Containership}