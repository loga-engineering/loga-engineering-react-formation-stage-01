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


export default function App() {

    const [clients, setClients] = useState([]);

    const addClient = (client) => {
        client = {...client, id: new Date().getTime()}
        console.log(client);
        setClients([...clients, client]);
    }

    const updateClient = (_client) => {
        const _clients = clients.map(client => client.id === _client.id ? _client : client);
        setClients(_clients);
    }

    const deleteClient = (id) => {
        const _clients = clients.filter(client => client.id !== id);
        setClients(_clients);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'clients'} element={<ClientListPage clients={clients} deleteClient={deleteClient} />}/>
                <Route path={'clients/:id'} element={<ClientDetailPage clients={clients} />}/>
                <Route path={'clients/new'} element={<CreateClientPage addClient={addClient} />}/>
                <Route path={'clients/update/:id'} element={<UpdateClientPage clients={clients} updateClient={updateClient}/>}/>
                <Route path={'users'} element={<UsersList/>}/>
                <Route path={'users/:id'} element={<UserDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
