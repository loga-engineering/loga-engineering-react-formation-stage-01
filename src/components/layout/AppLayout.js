import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography, Link as MuiLink} from "@mui/material";
import {Link} from "react-router-dom";

function AppLayout({children}) {

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <MuiLink component={Link} to={'/'}>
                        <Typography variant={'h4'} sx={{color: 'white'}}>Client APP</Typography>
                    </MuiLink>
                    <Box ml={4}>
                        <MuiLink component={Link} to={'/clients'}>
                            <Button sx={{color: 'white'}}>Clients</Button>
                        </MuiLink>
                        <MuiLink component={Link} to={'/clients/new'}>
                            <Button sx={{color: 'white'}}>Nouveau</Button>
                        </MuiLink>
                        <MuiLink component={Link} to={'/users'}>
                            <Button sx={{color: 'white'}}>utilisateurs</Button>
                        </MuiLink>
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