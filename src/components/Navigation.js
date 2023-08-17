import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;|&nbsp;
            <NavLink to="/contact">Contact</NavLink>&nbsp;|&nbsp;
            <NavLink to="/member">Member</NavLink>&nbsp;|&nbsp;
        </div>
    );
}

export default Nav;//負責更改路由