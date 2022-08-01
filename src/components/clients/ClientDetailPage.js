import React from 'react';
import AppLayout from "../layout/AppLayout";
import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

function ClientDetailPage({clients}) {

    const {id} = useParams();
    const navigate = useNavigate();
    const client = clients.find(client => client.id === +id);

    console.log(client);

    return (
        <AppLayout>
            <Card>
                <CardHeader title={'Detail du client'}/>
                <CardContent>
                    <Stack spacing={3}>
                        <TextField value={client?.id} label={'Id'} InputProps={{readOnly: true}}/>
                        <TextField value={client?.lastName} label={'Nom'} InputProps={{readOnly: true}}/>
                        <TextField value={client?.firstName} label={'Prenom'} InputProps={{readOnly: true}}/>
                        <TextField value={client?.address} label={'Adresse'} InputProps={{readOnly: true}}/>
                    </Stack>
                </CardContent>
            </Card>
        </AppLayout>
    );
}

export default ClientDetailPage;