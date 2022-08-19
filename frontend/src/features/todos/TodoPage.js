import React from 'react';
import AppLayout from "../layout/AppLayout";
import {
    Box, Button,
    Card,
    CardHeader,
    Checkbox,
    CircularProgress,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Refresh} from "@mui/icons-material";
import {useQuery, useMutation, useQueryClient} from "react-query";
import {useCreate, useTodos} from "./todo.store";

export default function TodoPage() {

    const queryClient = useQueryClient();

    const {create, isLoading: isCreation, data} = useCreate();
    const {todos, fetchTodos, isLoading, isError, error} = useTodos();

    return (
        <AppLayout>
            <Typography variant={"h2"}>
                Todos
            </Typography>

            <Card sx={{mt: 4}}>
                <CardHeader action={(
                    <Box display={"flex"}>
                        <IconButton onClick={fetchTodos}>
                            <Refresh/>
                        </IconButton>
                        <Button onClick={() => create({name: 'Toto'})}>Creer</Button>
                    </Box>
                )}/>
                {!isLoading && <TodoTable todos={todos}/>}
                {isLoading && (
                    <Box width={"100%"} height={"80vh"} justifyContent={"center"} alignItems={"center"}
                         display={"flex"}>
                        <CircularProgress/>
                    </Box>
                )}
                {isError && <Typography textAlign={"center"}>Une erreur est survenue {error}</Typography>}
            </Card>
        </AppLayout>
    );
}


function TodoTable({todos}) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Titre</TableCell>
                        <TableCell>Fait</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos?.map(todo => (
                        <TableRow key={todo.id} hover>
                            <TableCell>{todo.id}</TableCell>
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>
                                <Checkbox checked={todo.completed}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
