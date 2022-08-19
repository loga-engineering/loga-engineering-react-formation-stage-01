import {useQuery} from "react-query";
import {crudJPH} from "../../shared/service.utils";

const entityName = "todos";

export const {findAll, findById} = crudJPH(entityName);

export const create = async (entity) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({...entity, id: new Date().getTime()}), 2000)
    })
}