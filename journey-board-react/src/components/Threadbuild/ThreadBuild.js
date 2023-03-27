import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import v1 from '../../assets/vector1.svg';
import v2 from '../../assets/vector2.svg';
import v3 from '../../assets/vector3.svg';
import v4 from '../../assets/vector4.svg';
import "./ThreadBuild.css";

const ThreadBuild = ({ val }) => {
    return (
        <div>
            {val.asset_content}
            <hr style={{"color": "#D1CECE"}} />
            <div className='thread-heading'>
                <IoIosArrowUp size={22} /> Thread A
            </div>
            <div className='thread-interpretation'>
                <div className="sub-thread">
                    <p className='sub-thread-title'>Sub thread 1</p>
                    <textarea className='input-text' placeholder='Enter Text here'></textarea>
                </div>
                <div className="sub-thread">
                    <p className='sub-thread-title'>Sub Interpretation 1</p>
                    <textarea className='input-text' placeholder='Enter Text here'></textarea>
                </div>
            </div>
            <div className='icons-container'>
                <div className='icons'>
                    <img src={v1} alt="v1" className='img-icon' />
                    <img src={v2} alt="v2" className='img-icon' />
                    <img src={v3} alt="v3" className='img-icon' />
                    <img src={v4} alt="v4" className='img-icon' />
                </div>
                <div className='dropdown'>
                    <div className='dropdown1'>Select Categ<span><IoIosArrowDown size={14} style={{"marginLeft": "5px", "display": "flex", "alignItems": "center"}} /></span></div>
                    <div className='dropdown1'>Select Proces<span><IoIosArrowDown size={14} style={{"marginLeft": "5px", "display": "flex", "alignItems": "center"}} /></span></div>
                </div>
            </div>
            <div className='sub-thread-button'>
                <button type='button' className='button'><HiPlus size={15} style={{"marginRight": "5px"}} />Sub-thread</button>
            </div>

            <div className='thread-interpretation-summary'>
                <div className="sub-thread-summary">
                    <p className='sub-thread-title-summary'>Summary for Thread A</p>
                    <textarea className='input-text-summary' placeholder='Enter Text here'></textarea>
                </div>
            </div>
        </div>
    )
}

export default ThreadBuild