import React from 'react'
import logo from "../../assets/logo.svg";
import { FaHome, FaTools } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import user from '../../assets/user.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <h1>DEEP {" "}<span>THOUGHT</span></h1>
            </div>
            <div className="icons-list">
                <ul>
                    <li><FaHome size={24} style={{"color": "#fff", "background": "#3683F0", "height": "35px", "width": "35px", "padding": "7px", "borderRadius": "50%"}} /></li>
                    <li><FaTools size={24} style={{"color": "#fff", "background": "#3683F0", "height": "35px", "width": "35px", "padding": "7px", "borderRadius": "50%"}} /></li>
                    <li><IoIosNotifications size={24} style={{"color": "#fff", "background": "#3683F0", "height": "35px", "width": "35px", "padding": "7px", "borderRadius": "50%"}} /><span className='notification'></span></li>
                    <li><img src={user} alt="user" style={{"height": "35px", "width": "35px", "objectFit": "cover", "borderRadius": "50%"}} /></li>
                    <li><HiOutlineDotsVertical size={24} style={{"color": "#3683F0"}} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar