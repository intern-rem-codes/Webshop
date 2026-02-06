export interface IProduct{
    id:number;
    name:string;
    description:string;
    price:string;
    image:string;
}

export interface IPerson{
    id:number;
    name:string;
    age:number;
    hobbies:string[];
    pets:IAnimal[];
}

export interface IAnimal{
    id:number;
    name:string;
    color:string;
    age:number;
    species:string;
    gender: "Male" | "Female";
}