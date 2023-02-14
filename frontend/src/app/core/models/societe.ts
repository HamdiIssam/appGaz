export interface Societe {
    id:number,
    email?:string,
    password?:string,
    telephone?:number,
    fax?:number,
    logo?:string,
    adresse?:string,
    nom_employeur?:string,
    prenom_employeur?:string,
    temps_ouverture?:string,
    temps_fermeture?:string,
    nom_societe?:string,
    jour_travail?: string,
    matricule_fiscale?:string
}
