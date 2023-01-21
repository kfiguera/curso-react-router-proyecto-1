import React from 'react';
import {useNavigate} from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({username}) => {
        setUser({username});
        console.log('User logged in');
        navigate('/profile');
    };
    const logout = () => {
        setUser(null);
        console.log('User logged out');
        navigate('/');
    };
    const auth = {user, login, logout};

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    return React.useContext(AuthContext);
};

export {AuthProvider, useAuth};