import React from 'react';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='col-4 col-lg-2 col-md-3 sidebar'>
            <img width='80px' src='https://i.imgur.com/lEWR0xg.png' alt=""/>
            <div className='mt-5'>
                <a className='decoration-none' href='#'>
                    <FontAwesomeIcon className='icon' icon={faClipboardList} /> Booking list
                </a>
                <a href='#'>
                    <FontAwesomeIcon className='icon' icon={faPlus} /> Add Rent
                </a>
                <a href='#'>
                    <FontAwesomeIcon className='icon' icon={faHome} /> My Rent
                </a>
            </div>
        </div>
    );
};

export default Sidebar;