import { Payload } from "./Payload";
import {Cargo} from "./Cargo"
import { Rocket } from "./Rocket";

export class Astronaut implements Payload {
    name: string;
    massKg: number;

    constructor(massKg: number, name: string) {
        this.massKg= massKg;
        this.name= name; 
    }
}

