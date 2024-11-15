import React from 'react';
import UserProfile from './Components/Userprofile';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#f8f9fa', padding: '12px 0' }} className="text-dark ">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src="data:image/jpeg;base64,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"
                        width={50}
                        alt=""
                        className='me-3 border'
                        style={{
                            mixBlendMode:'multiply',
                            borderRadius:'10px'
                        }}
                    />
                    <ul className=" nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 headerMneu">
                        <li>
                            <a href="#" style={{ color: '#6c757d',borderRadius:'5px'  }} className="nav-link px-2  ">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{ color: '#6c757d', borderRadius:'5px' }} className="nav-link px-2 ">
                                Patch Number Search
                            </a>
                        </li>

                    </ul>
                    <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" className='me-3' alt="cart" style={{width:'40px',mixBlendMode:'multiply'}} />
                    <div className="text-end">
                        <UserProfile />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
