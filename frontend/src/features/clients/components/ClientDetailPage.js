import React, {useContext, useEffect, useState} from 'react';
import AppLayout from "../../layout/AppLayout";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CircularProgress,
    Stack,
    TextField, Typography
} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {ClientContext, useClientContext} from "./ClientContext";
import {findById} from "../client.service";

function ClientDetailPage() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState();

    useEffect(() => {
        findById(id).then(client => {
            setClient(client);
            setLoading(false);
        })
    }, [id]);

    return (
        <AppLayout>
            {!client && !loading && (
                <Box display={"flex"} flex={1}>
                    <Typography> {"Le client avec l'id " + id + " n'existe pas"}</Typography>
                </Box>
            )}
            {loading && (
                <Box display={"flex"} flex={1}>
                    <CircularProgress/>
                </Box>
            )}
            {!loading && client && (
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
            )}
        </AppLayout>
    );
}

export default ClientDetailPage;