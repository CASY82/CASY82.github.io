// Header.js
import React from 'react';
import BootstrapButton from './BootstrapButton';
import BootstrapDropdown from './BootstrapDropdown';
import '../styles/Common.css';

const Header = () => {
    return (
        <header className="header">
            <h1>행적 Repository</h1>
            <nav>
                <table style={{ margin: '0 auto' }}>
                    <tbody>
                        <tr>
                            <td><BootstrapButton label="Home" href = "/" /></td>
                            <td><BootstrapButton label="Posts" href = "/posts" /></td>
                            <td><BootstrapDropdown /></td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </header>
    );
};

export default Header;