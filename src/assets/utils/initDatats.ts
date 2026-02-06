import type { IPerson } from "../../Interfaces/interfaces";

export const person: IPerson={
    id: 0,
    name: "Jason",
    age: 30,
    hobbies: ['fishing', 'waching movies'],
    pets: [{
        id: 0,
        name: "hond",
        color: "brown",
        age: 2,
        species: "dog",
        gender: "Male"
    }, {
        id: 1,
        name: "kat",
        color: "black",
        age: 1,
        species: "cat",
        gender: "Female"
    }]
}