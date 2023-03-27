import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import './FourSA.css';

const FourSA = ({ val }) => {
    return (
        <div>
            <a href={val.asset_content}>{}</a>
            <hr style={{"color": "#D1CECE"}} />
            <div className="introduction">
                <div className='introduction-heading'>
                    <IoIosArrowUp size={22} style={{"marginLeft": "10px"}} /> Introduction
                </div>
                <div className='introduction-desc'>
                    <p>The 4SA Method , How to bring a idea into progress ?</p>
                    <span className='more-text'>See More</span>
                </div>
            </div>
            <div className="threadA">
                <div className='introduction-heading'>
                    <IoIosArrowUp size={22} style={{"marginLeft": "10px"}} /> Thread A
                </div>
                <div className='introduction-desc'>
                    <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                    <span className='more-text'>See More</span>
                </div>
            </div>
            <div className="example1">
                <div className='introduction-heading'>
                    <IoIosArrowUp size={22} style={{"marginLeft": "10px"}} /> Example 1
                </div>
                <div className='introduction-desc'>
                    <p>You have a concept , How will you put into progress?</p>
                    <span className='more-text'>See More</span>
                </div>
            </div>
        </div>
    )
}

export default FourSA