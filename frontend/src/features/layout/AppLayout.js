import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography, Link as MuiLink} from "@mui/material";
import {Link} from "react-router-dom";
import {useClientContext} from "../clients/components/ClientContext";

const menu = [
    {label: 'Clients', link: '/clients'},
    {label: 'Nouveau', link: '/clients/new'},
    {label: 'Utilisateurs', link: '/users'},
    {label: 'Context', link: '/context'},
]

function AppLayout({children}) {

    const {filteredClients} = useClientContext();

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <MuiLink component={Link} to={'/'}>
                        <Typography variant={'h4'} sx={{color: 'white'}}>Client APP</Typography>
                    </MuiLink>
                    <Box ml={4}>
                        {menu.map(_menu => (
                            <MuiLink key={_menu.link} component={Link} to={_menu.link}>
                                <Button sx={{color: 'white'}}>{_menu.label}</Button>
                            </MuiLink>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>

            <Container sx={{marginTop: 12}}>
                {children}
            </Container>
        </Box>
    );
}

export default AppLayout;