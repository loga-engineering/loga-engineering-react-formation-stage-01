import React, {useEffect, useState} from 'react';
import AppLayout from "../layout/AppLayout";
import {
    Box,
    Card, CardHeader,
    CircularProgress, IconButton, LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Refresh} from "@mui/icons-material";
import {useQuery} from "react-query";

export default function PostPage() {

    const queryKey = ["posts.findAll"]
    const queryFn = () => fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
    const {isLoading, data: posts, refetch: fetchPosts, isError, error} = useQuery(queryKey, queryFn);


    return (
        <AppLayout>
            <Typography variant={"h2"}>
                Posts
            </Typography>

            <Card sx={{mt: 4}}>
                <CardHeader action={(
                    <IconButton onClick={fetchPosts}>
                        <Refresh/>
                    </IconButton>
                )}/>
                {!isLoading && <PostTable posts={posts}/>}
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


function PostTable({posts}) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Titre</TableCell>
                        <TableCell>Contenu</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts?.map(post => (
                        <TableRow key={post.id} hover>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
