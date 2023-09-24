import { Category } from "./category.type"

export type Product = {
    id: number,
    name : string,
    description : string,
    price : number,
    coordinates : Coordinates,
    views : number,
    image : string,
    category : Category,
    forSale : boolean
}

export type Coordinates = {
    type : string
    coordinates : number[]
}