import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const CustomLink = ({ route }) => {
    return (
        <div>

            <ActiveLink to={route.path}>{route.name}</ActiveLink>

        </div>
    );
};

export default CustomLink;

