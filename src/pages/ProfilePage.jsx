import React from 'react';
import {useAuth} from "../components/auth/auth";

function ProfilePage() {
    const auth = useAuth();
    return (
        <>
            <h1>Profile</h1>
            <p>Welcome, {auth.user.username}</p>
        </>
    );
}

export {ProfilePage};