import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Rocket } from "./Rocket";

export class Cargo implements Payload {
    material : string;
    massKg: number;
    name: string;

    constructor (massKg: number, material: string) {

    }
}