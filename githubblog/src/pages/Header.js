// Header.js
import React from 'react';
import BootstrapButton from '../components/BootstrapButton';
import BootstrapDropdown from '../components/BootstrapDropdown';
import '../styles/Common.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My React App</h1>
            <nav>
                <table style={{ margin: '0 auto' }}>
                    <tbody>
                        <tr>
                            <td><BootstrapButton label="Home" href = "/" /></td>
                            <td><BootstrapButton label="Contact" href = "/" /></td>
                            <td><BootstrapButton label="Tmp" href = "/" /></td>
                            <td><BootstrapDropdown /></td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </header>
    );
};

export default Header;