import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return(
        <>
        <Outlet />
            <footer className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </footer>
        </>
    );
};

export default Layout;