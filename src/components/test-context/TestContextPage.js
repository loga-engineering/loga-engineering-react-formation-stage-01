import React from 'react';
import AppLayout from "../layout/AppLayout";
import {Button, createTheme, ThemeProvider} from "@mui/material";

const redTheme = createTheme({
    palette: {
        primary: {
            main: '#eb4034'
        }
    }
});

const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#42b013'
        },
    }
});

function TestContextPage() {

    const button = <Button variant={'contained'}>Bonjour</Button>;

    return (
        <AppLayout>

            <ThemeProvider theme={redTheme}>
                {button}
            </ThemeProvider>
            <ThemeProvider theme={greenTheme}>
                {button}
            </ThemeProvider>
            {button}
        </AppLayout>
    );
}

export default TestContextPage;