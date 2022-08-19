import {useMutation, useQuery} from "react-query";
import {useCreate as _useCreate} from "../../shared/store.utils";
import {findAll, findById, create} from "./todo.service";

const entity = "todos";


export const useTodos = () => {
    const {data: todos, refetch: fetchTodos, ...others} = useQuery([entity, "findAll"], findAll, {
        refetchInterval: 2_000
    });

    return {todos, fetchTodos, ...others};
}


export const useTodoById = (id) => {
    const {data: todos, ...others} = useQuery([entity, "findById"], () => findById(id));

    return {todos, ...others};
}

export const useCreate = () => _useCreate(create);