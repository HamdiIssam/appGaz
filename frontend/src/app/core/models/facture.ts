import { Commande } from "./commande";
import { Societe } from "./societe";

export interface Facture {
    id:number,
    montant:string,
    tva:string,
    num_facture:number,
    commandeId:number,
    societeId?:number
}
