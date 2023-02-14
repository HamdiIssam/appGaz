import { ProfModel } from "src/app/proffesseur/prof-model";
import { ModelClasse } from "../classe/modelClasse";
import { Matiere } from "../matiere/matiere";

export interface EmploiModel {
  _id:string,
  professeur:ProfModel,
  matiere?:Matiere,
  jour:string,
  seance:string,
  salle:string,
  classe:ModelClasse,
}
