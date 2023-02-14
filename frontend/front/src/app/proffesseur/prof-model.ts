import { Matiere } from "../admin/matiere/matiere"

export interface ProfModel {
_id :string,
fullname:string,
email?:string,
specialite:string
matiere?:Matiere
}
