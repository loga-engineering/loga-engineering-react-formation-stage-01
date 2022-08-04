import React, {useState} from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import ClientListPage from "./components/clients/ClientListPage";
import ClientDetailPage from "./components/clients/ClientDetailPage";
import CreateClientPage from "./components/clients/CreateClientPage";
import UpdateClientPage from "./components/clients/UpdateClientPage";
import ClientRouter from "./components/clients/ClientRouter";
import UsersList from "./components/users/UsersList";
import UserDetailPage from "./components/users/UserDetailPage";
import TestContextPage from "./components/test-context/TestContextPage";
import ClientProvider from "./components/clients/ClientContext";


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
