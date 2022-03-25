import React from 'react';
import './Manubar.css'


const Manubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 ">
                        <h2 className='m-2 '>Logo</h2>
                    </div>

                    <div className="col-md-10 menu-container">
                        <li className='items me-4 p-4'>Home</li>
                        <li className='items me-4 p-4'>About</li>
                        <li className='items me-4 p-4'>Cart <sup>{props.count}</sup> </li>
                        <li className='items me-4 p-4'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manubar;