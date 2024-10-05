// Sidebar.js
import React from 'react';
import '../styles/Common.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;