import React from 'react';
import {NavLink} from "react-router-dom";
import routes from '../fixtures/routes';

function Menu() {
    const checkIsActive = (active) => {
        return {color: (active) ? 'green' : 'red'};
    };

    return (
        <nav>
            <ul>
                {
                    routes.map(route => (
                        <li key={route.id}>
                            <NavLink
                                to={route.to}
                                end
                                style={({isActive}) => (checkIsActive(isActive))}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
        </nav>
    );
}

export {Menu};