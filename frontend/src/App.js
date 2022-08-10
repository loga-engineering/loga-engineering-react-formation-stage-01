import React, {useState} from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./features/HomePage";
import ClientListPage from "./features/clients/components/ClientListPage";
import ClientDetailPage from "./features/clients/components/ClientDetailPage";
import CreateClientPage from "./features/clients/components/CreateClientPage";
import UpdateClientPage from "./features/clients/components/UpdateClientPage";
import ClientRouter from "./features/clients/components/ClientRouter";
import UsersList from "./features/users/UsersList";
import UserDetailPage from "./features/users/UserDetailPage";
import TestContextPage from "./features/test-context/TestContextPage";
import ClientProvider from "./features/clients/components/ClientContext";


export default function App() {

    return (
        <ClientProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'clients'} element={<ClientListPage/>}/>
                    <Route path={'clients/:id'} element={<ClientDetailPage/>}/>
                    <Route path={'clients/new'} element={<CreateClientPage/>}/>
                    <Route path={'clients/update/:id'}
                           element={<UpdateClientPage/>}/>
                    <Route path={'users'} element={<UsersList/>}/>
                    <Route path={'users/:id'} element={<UserDetailPage/>}/>
                    <Route path={'context'} element={<TestContextPage/>}/>
                </Routes>
            </BrowserRouter>
        </ClientProvider>
    )
}
