import { MillenniumFalcon } from './starfighters'
import { Spacecraft, Containership } from './base-ships'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntohyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntohyperspace()

let goodForTherJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTherJob(falcon) ? 'YES' : 'NO'}`)