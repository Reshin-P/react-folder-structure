import React from 'react';
import Header from '../components/header/Header.js';
import SideBar from '../components/sideBar/SideBar.js';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <SideBar />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;