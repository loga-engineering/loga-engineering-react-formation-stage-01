import {useMutation} from "react-query";
import {create} from "../features/todos/todo.service";


export const useCreate = (createFn) => {

    const {mutate, ...others} = useMutation(createFn, {
        onMutate: (variables) => {
            console.log("onMutate", {variables})
        },
        onError: (error, variables, context) => {
            console.log("onError", {error, variables, context})
        },
        onSuccess: (data, variables, context) => {
            console.log("onSuccess ", {data, variables, context})
        }
    });

    return {create: mutate, ...others}
}