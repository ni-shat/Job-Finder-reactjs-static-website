import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (

        <NavLink to={to}
            className={({ isActive }) => isActive ? "text-purple-400" : "text-black"}
        >
            {children}

        </NavLink>

    );
};

export default ActiveLink;


/***
 * 
 * .active {
    background-color: rgb(188, 216, 233);
    text-decoration: underline;
}
 */