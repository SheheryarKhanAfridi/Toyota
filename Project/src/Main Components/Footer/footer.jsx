import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f8f9fa', 
            color: '#6c757d', 
            textAlign: 'center', 
            padding: '10px 0', 
            position: 'fixed', 
            left: '0', 
            bottom: '0', 
            width: '100%',
            borderTop: '1px solid #dee2e6'
        }}>
            <div className="container">
                <p style={{ margin: '0' }}>
                    © {new Date().getFullYear()} Your Company Name. All rights reserved.
                </p>
                <p style={{ margin: '0' }}>
                    Follow us on 
                    <a href="#" style={{ color: '#0d6efd', paddingLeft: '5px' }}>Facebook</a>, 
                    <a href="#" style={{ color: '#0d6efd', paddingLeft: '5px' }}>Twitter</a>, and 
                    <a href="#" style={{ color: '#0d6efd', paddingLeft: '5px' }}>Instagram</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
