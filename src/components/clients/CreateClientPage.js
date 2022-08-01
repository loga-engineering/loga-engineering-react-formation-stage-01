import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import AppLayout from "../layout/AppLayout";
import {useNavigate} from "react-router-dom";

function CreateClientPage({addClient}) {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');

    const handleCreate = () => {
        const client = {
            firstName, lastName, address
        };

        addClient(client);

        navigate('/clients');

    }

    return (
        <AppLayout>
            <Card>
                <CardHeader title={'Creation de client'}/>
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
                    <Button variant={'contained'} onClick={handleCreate}>Creer</Button>
                </CardActions>
            </Card>
        </AppLayout>
    );
}

export default CreateClientPage;