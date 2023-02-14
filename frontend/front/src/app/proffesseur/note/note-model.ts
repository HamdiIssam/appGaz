import { Matiere } from "src/app/admin/matiere/matiere"
import { Eleve } from "src/app/eleve/eleve-model"

export interface  NoteModel {
_id :string,

note_td:string,
note_tp:string,
note_sy:string,
mention:string,

eleve:Eleve
matiere:Matiere


}
