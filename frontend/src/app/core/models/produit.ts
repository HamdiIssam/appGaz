import { Societe } from "./societe";

export interface Produit {
    id:number,
    type:string,
    prixUnit:number,
    unite:string,
    photo:any,
    societeId?:number
}
