import React from 'react';
import AppLayout from "./layout/AppLayout";
import {Button, Typography} from "@mui/material";

function HomePage() {
    return (
        <AppLayout>
            <Typography variant={'h1'}>Home Page</Typography>
        </AppLayout>
    );
}

export default HomePage;