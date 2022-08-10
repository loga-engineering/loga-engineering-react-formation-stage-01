import React, {useEffect, useState} from 'react';
import AppLayout from "../layout/AppLayout";
import {useParams} from "react-router-dom";
import {UserCard} from "./UsersList";

function UserDetailPage() {

    const {id} = useParams();
    const [user, setUser] = useState();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);


    return (
        <AppLayout>
            {user && <UserCard user={user}/>}
        </AppLayout>
    );
}

export default UserDetailPage;