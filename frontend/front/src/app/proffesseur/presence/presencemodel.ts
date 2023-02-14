import { Eleve } from "src/app/eleve/eleve-model"
import { ProfModel } from "../prof-model"

export interface Presencemodel {
    _id :string,
eleve:Eleve,
professeur:ProfModel
date:string,
heure:string,
etat:string


}
