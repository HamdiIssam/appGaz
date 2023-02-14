import { ModelClasse } from "src/app/admin/classe/modelClasse";

export interface Homework {
    _id :string,

    homework:string,
    classe:ModelClasse, 
}
