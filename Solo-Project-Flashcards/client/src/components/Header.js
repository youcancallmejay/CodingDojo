import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, rightButtonLink, rightButtonText }) => {
    return (
        <div style={{ backgroundColor: '#1E0F23', padding: '10px 20px', display: 'flex', height: '6rem', alignItems: 'center', paddingLeft: '20%', paddingRight: '20%' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1280px-Flag_of_Thailand.svg.png" alt="Flag of Thailand" style={{ height: '50px', marginRight: '10px' }} />
            <h1 style={{ flex: 1, textAlign: 'left', color: 'white', margin: 0, fontSize: '2rem' }}>
                {title}
            </h1>
            </div>
            <div style={{ flex: 1}}>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
                {rightButtonLink && (
                    <Link to={rightButtonLink} style={{ padding: '2%', color: 'black', textDecoration: 'none', backgroundColor: '#D1C4E9', boxShadow: '5px 2px 2px', borderRadius: '5px' }}>
                        {rightButtonText}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
