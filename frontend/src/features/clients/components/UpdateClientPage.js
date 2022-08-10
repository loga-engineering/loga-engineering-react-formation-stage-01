import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import AppLayout from "../../layout/AppLayout";
import {useNavigate, useParams} from "react-router-dom";
import {useClientContext} from "./ClientContext";

function UpdateClientPage() {

    const {clients, updateClient} = useClientContext();

    const {id} = useParams();
    const navigate = useNavigate();
    const client = clients.find(client => client.id === +id);

    console.log(client);

    const [firstName, setFirstName] = useState(client?.firstName);
    const [lastName, setLastName] = useState(client?.lastName);
    const [address, setAddress] = useState(client?.address);

    const goToHome = () => navigate('/clients');

    const handleUpdate = () => {
        const _client = {
            ...client, firstName, lastName, address
        };

        updateClient(_client);

        goToHome();
    }

    return (
        <AppLayout>
            <Card>
                <CardHeader title={'Modification du client'}/>
                <CardContent>
                    <Stack spacing={3}>
                        <TextField value={lastName} label={'Nom'} name={'lastName'}
                                   onChange={e => setLastName(e.target.value)}/>
                        <TextField value={firstName} label={'Prenom'} name={'firstName'}
                                   onChange={e => setFirstName(e.target.value)}/>
                        <TextField value={address} label={'Adresse'} name={'address'}
                                   onChange={e => setAddress(e.target.value)}/>
                    </Stack>
                </CardContent>
                <CardActions sx={{justifyContent: 'end'}}>
                    <Button onClick={goToHome}>Annuler</Button>
                    <Button variant={'contained'} onClick={handleUpdate}>Modifier</Button>
                </CardActions>
            </Card>
        </AppLayout>
    );
}

export default UpdateClientPage;