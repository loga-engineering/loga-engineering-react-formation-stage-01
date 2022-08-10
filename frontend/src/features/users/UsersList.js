import React, {useEffect, useState} from 'react';
import AppLayout from "../layout/AppLayout";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Typography, Link as MuiLink, } from "@mui/material";
import {Phone} from "@mui/icons-material";
import {Link} from "react-router-dom";

function UsersList() {

    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
        // fetch('https://jsonplaceholder.typicode.com/photos')
        //     .then(res => res.json())
        //     .then(data => setPhotos(data));
    }, []);


    return (
        <AppLayout>
            <Grid container spacing={3}>
                {users?.map(user => (
                    <Grid key={user.id} item xs={12} md={6} lg={4}>
                        <MuiLink component={Link} to={'/users/' + user.id} underline={'none'}>
                            <UserCard user={user}/>
                        </MuiLink>
                    </Grid>
                ))}
            </Grid>
            {/*<Grid container spacing={3}>*/}
            {/*    {photos?.map(photo => (*/}
            {/*        <PhotoCard key={photo.id} photo={photo}/>*/}
            {/*    ))}*/}
            {/*</Grid>*/}
        </AppLayout>
    );
}

export default UsersList;

export function UserCard({user}) {
    return (
        <Card>
            <CardHeader
                title={user.name}
                subheader={user.email}
                avatar={<Avatar>{user.id}</Avatar>}
            />
            <CardContent>

                <Chip label={user.phone} icon={<Phone sx={{fontSize: 15}}/>}/>
            </CardContent>
        </Card>
    )
}

function PhotoCard({photo}) {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="194"
                    image={photo.url}
                />
                <CardContent>

                    <Typography>{photo.title}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}