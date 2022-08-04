import React, {useContext, useEffect, useState} from 'react';
import AppLayout from "../layout/AppLayout";
import {
    Button,
    Card,
    CardContent,
    CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Link as MuiLink, TextField, Typography
} from "@mui/material";

import {Clear, Delete, Edit, Info, Search} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useClientContext} from "./ClientContext";

function ClientListPage() {

    const {clients, deleteClient, filter, filteredClients, setFilter} = useClientContext();

    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false);


    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        deleteClient(idToDelete);
        setOpen(false);
    }

    return (
        <AppLayout>

            <Card>
                <CardHeader title={'Liste des clients'}/>
                <CardContent>

                    <TextField
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        InputProps={{
                            startAdornment: <Search/>,
                            endAdornment: filter && (
                                <IconButton onClick={() => setFilter('')}>
                                    <Clear/>
                                </IconButton>
                            )
                        }}
                    />

                    <TableContainer sx={{mt: 2}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Id
                                    </TableCell>
                                    <TableCell>
                                        Nom
                                    </TableCell>
                                    <TableCell>
                                        Prenom
                                    </TableCell>
                                    <TableCell>
                                        Adresse
                                    </TableCell>
                                    <TableCell>
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredClients.map(client => (
                                    <Row key={client.id} client={client} onDelete={() => {
                                        setIdToDelete(client.id);
                                        setOpen(true)
                                    }}/>
                                ))}
                            </TableBody>
                        </Table>

                        <Typography sx={{
                            mt: 2, textAlign: "end"
                        }}>
                            {filteredClients.length} / {clients.length} Clients(s)
                        </Typography>
                    </TableContainer>
                </CardContent>
            </Card>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Suppression</DialogTitle>
                <DialogContent>Voulez-vous vraiment supprimer ce client</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Non</Button>
                    <Button onClick={handleDelete} sx={{color: 'red'}}>Oui</Button>
                </DialogActions>
            </Dialog>

        </AppLayout>
    );
}

export default ClientListPage;

function Row({client, onDelete}) {
    const detailLink = '/clients/' + client.id;
    const updateLink = '/clients/update/' + client.id;
    return (
        <TableRow key={client.id}>
            <TableCell>
                <MuiLink component={Link} to={detailLink}>
                    {client.id}
                </MuiLink>
            </TableCell>
            <TableCell>
                <MuiLink component={Link} to={detailLink}>
                    {client.lastName}
                </MuiLink>
            </TableCell>
            <TableCell>
                {client.firstName}
            </TableCell>
            <TableCell>
                {client.address}
            </TableCell>
            <TableCell>
                <Tooltip title={'Afficher'}>
                    <MuiLink component={Link} to={detailLink}>
                        <IconButton>
                            <Info/>
                        </IconButton>
                    </MuiLink>
                </Tooltip>
                <Tooltip title={'Modifier'}>
                    <MuiLink component={Link} to={updateLink}>
                        <IconButton>
                            <Edit/>
                        </IconButton>
                    </MuiLink>
                </Tooltip>
                <Tooltip title={'Supprimer'}>
                    <IconButton onClick={onDelete}>
                        <Delete sx={{color: 'red'}}/>
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )
}