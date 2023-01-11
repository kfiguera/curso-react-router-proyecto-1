import React from 'react';
import {useAuth} from "../components/auth/auth";

function LogoutPage() {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    };

    return (
        <React.Fragment>
            <h1>Logout</h1>
            <form onSubmit={logout}>
                <label>¿Seguro que quieres salir?</label>
                <button type='submit'>
                    Cerrar
                </button>
            </form>
        </React.Fragment>

    );
}

export {LogoutPage};