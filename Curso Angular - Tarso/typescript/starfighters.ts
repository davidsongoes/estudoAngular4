import { Spacecraft, Containership } from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 14
    }

    jumpIntohyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntohyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}