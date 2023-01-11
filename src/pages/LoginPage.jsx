import React, {BaseSyntheticEvent as e} from 'react';
import {useAuth} from "../components/auth/auth";

function LoginPage() {
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    const login = (e) => {
        e.preventDefault();
        auth.login({username});
    };
    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario:</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type='submit'>
                    Ingresar
                </button>
            </form>
        </React.Fragment>

    );
}

export {LoginPage};