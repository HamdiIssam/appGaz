import { Livreur } from "./livreur"

export interface Commande {
    id:number,
    date_achat:Date,
    date_livraison?:Date,
    adresse?:string,
    validation?:boolean,
    type_payement?:string,
    total?:number
    clientId ?:number,
    livreurId?:number,
    societeId?:number
}
