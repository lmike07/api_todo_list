import {object, string} from 'yup'

export const GetSchema = object().shape({
    status: string().required().test("Isvalid", (status) => {
        if (status === "in_progress" || status === "completed") {
            return true;
        }else {
            return false;
        }
    })
});

export const GetByIdSchema = object().shape({
    id_task: string().required().uuid()
});

export const AddSchema = object().shape({
    descricao: string().required(),
    data: string().required(),
    status: string().required().test("addIsvalid", (status) => {
        if (status === "in_progress" || status === "completed") {
            return true;
        }else {
            return false;
        }
    })
});

export const UpadteSchema = object().shape({
    id: string().required(),
    descricao: string().required(),
    data: string().required(),
    status: string().required().test("upadateIsvalid", (status) => {
        if(status === "in_progress" || status === "completed") {
            return true
        }else {
            return false
        }
    })
}); 

export const UpadteSchemaParams = string().required();

export const DeleteSchema = string().required().uuid()


