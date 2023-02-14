import { Eleve } from "src/app/eleve/eleve-model"
import { ProffesseurModule } from "../proffesseur.module"

export interface Pinalitemodel {
    _id :string,
    penaliteType:string,
    date:string,
    eleve:Eleve,
    professeur:ProffesseurModule
}
