import React from 'react'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import './Pointer.css';

const Pointer = ({ val }) => {
    return (
        <div>
            {val.asset_content}
            <hr style={{"color": "#D1CECE"}} />   
            <div className="content-title">
                <h2 className='content-heading'>Title</h2>
                <input type="text" className='input-text-content' />
            </div> 
            <div className="content">
                <h2 className="content-heading">Content</h2>
                <div className="content-menu">
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Insert</li>
                        <li>Format</li>
                        <li>Tools</li>
                        <li>Table</li>
                        <li>Help</li>
                    </ul>
                    <div className="menu-icons">
                        <img src={icon1} alt="icon1" className='menu-icon' />
                        <img src={icon2} alt="icon2" className='menu-icon'/>
                        <img src={icon3} alt="icon3" className='menu-icon'/>
                        <span className='menu-icon para'>Paragraph</span>
                        <IoEllipsisHorizontalSharp className='menu-icon'/>
                    </div>
                </div>
                <div>
                    <textarea className='content-area' placeholder='Enter Text here'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Pointer