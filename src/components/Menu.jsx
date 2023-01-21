import React from 'react';
import {NavLink} from "react-router-dom";
import routes from '../fixtures/routes';
import {useAuth} from "./auth/auth";

function Menu() {
    const auth = useAuth();
    const checkIsActive = (active) => {
        return {color: (active) ? 'green' : 'red'};
    };
    const isOnlyPublicRoute = (route) => {
        return !(route?.onlyPublic && auth.user);
    };
    const isPrivateRoute = (route) => {
        return !(route.private && !auth.user);
    };

    return (
        <nav>
            <ul>
                {
                    routes.map(route => {
                        if (isOnlyPublicRoute(route)) {
                            if (isPrivateRoute(route)) {
                                return (<li key={route.id}>
                                    <NavLink
                                        to={route.to}
                                        end
                                        style={({isActive}) => (checkIsActive(isActive))}
                                    >
                                        {route.text}
                                    </NavLink>
                                </li>);
                            }
                        }
                    })
                }

            </ul>
        </nav>
    );
}

export {Menu};