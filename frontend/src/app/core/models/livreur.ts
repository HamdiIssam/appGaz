import { Societe } from "./societe";

export interface Livreur {
    id:number,
    nom?:string,
    telephone?:number,
    password?:string,
    societeId?:number
}
