import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import './RightContainer.css';

const RightContainer = () => {
    return (
        <div className="container-right">
            <div className="notice-board">
                <RxCross2 size={24}  style={{"cursor": "pointer"}} /><p className="container-right-title">Notice Board</p> 
            </div>
        </div>
    )
}

export default RightContainer