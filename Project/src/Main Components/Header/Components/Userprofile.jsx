import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';  // Importing user icon from react-icons

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="text-end" style={{ position: 'relative' }}>
            <button
                type="button"
                className="btn btn-outline-dark rounded-circle p-2"
                onMouseEnter={openDropdown}  // Open dropdown on mouse enter
                onMouseLeave={closeDropdown} // Close dropdown on mouse leave
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <FaUser style={{ fontSize: '20px' }} />  
            </button>
            {isOpen && (
                <div
                    onMouseEnter={openDropdown}  // Keep dropdown open when mouse is over the dropdown
                    onMouseLeave={closeDropdown} // Close dropdown when mouse leaves the dropdown
                    style={{
                        position: 'absolute',
                        right: 0,
                        backgroundColor: '#ffffff',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        width: '200px',
                        textAlign: 'left',
                        zIndex: 1000
                    }}
                >
                    <a href="#" style={{
                        display: 'block',
                        padding: '10px',
                        color: '#495057',
                        textDecoration: 'none'
                    }}>View Profile</a>
                    <a href="#" style={{
                        display: 'block',
                        padding: '10px',
                        color: '#495057',
                        textDecoration: 'none'
                    }}>Settings</a>
                    <a href="#" style={{
                        display: 'block',
                        padding: '10px',
                        color: '#495057',
                        textDecoration: 'none'
                    }}>Log Out</a>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
