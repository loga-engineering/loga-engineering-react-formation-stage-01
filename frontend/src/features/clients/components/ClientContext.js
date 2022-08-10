import React, {useContext, useEffect, useState} from 'react';
import {createContext} from "react";
import {findAll} from "../client.service";


export const ClientContext = createContext({
    clients: [],
    addClient: (client) => {},
    updateClient: (client) => {},
    deleteClient: (id) => {},
    filter: '',
    filteredClients: [],
    setFilter: (filter) => {},
    posts: [],
});

export const useClientContext = () => useContext(ClientContext);

const match = (client, filter) => {
    const filterBase = (client.firstName + client.lastName + client.id + client.address).toLowerCase();
    return filterBase.indexOf(filter) >= 0;
}

export default function ClientProvider({children}) {

    const [clients, setClients] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    useEffect(() => {
        findAll()
            .then(clients => setClients(clients));
    }, []);

    useEffect(() => {
        const _filter = filter.toLowerCase();
        const _filteredClients = clients.filter(client => match(client, _filter));
        setFilteredClients(_filteredClients);
    }, [filter, clients]);


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

    const clientContext = {
        clients,
        addClient,
        updateClient,
        deleteClient,
        filter,
        filteredClients,
        setFilter,
    }

    return (
        <ClientContext.Provider value={clientContext}>
            {children}
        </ClientContext.Provider>
    );
}
