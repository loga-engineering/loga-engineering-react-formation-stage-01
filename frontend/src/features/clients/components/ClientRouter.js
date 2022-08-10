import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import ClientListPage from "./ClientListPage";
import ClientDetailPage from "./ClientDetailPage";
import CreateClientPage from "./CreateClientPage";
import UpdateClientPage from "./UpdateClientPage";
import {Box} from "@mui/material";

function ClientRouter() {
    return (
        <Box>
            <Outlet/>
            <Routes>
                <Route index element={<ClientListPage/>}/>
                <Route path={':id'} element={<ClientDetailPage/>}/>
                <Route path={'new'} element={<CreateClientPage/>}/>
                <Route path={'update/:id'} element={<UpdateClientPage/>}/>
            </Routes>
        </Box>
    );
}

export default ClientRouter;