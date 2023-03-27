import React, { useState } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './LeftContainer.css';

const LeftContainer = ({ data, cardData }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (e) => {
        setOpen(!open);
    }

    return (
        <>
            {
                open ?
                <div className='container-left'>
                    <div className='container-title'>
                        <p>Journey Board</p>
                        {
                            open ?
                            <BsArrowLeftShort size={24}  className="leftright-arrow" onClick={handleClose} /> :
                            <BsArrowRightShort size={24} className="leftright-arrow" onClick={handleClose} />
                        }
                    </div>
                    <div className='container-content'>
                        <ul>
                            <li style={{"margin": "20px 0 20px", "fontWeight": "600"}}>{data.tasks?.[0].task_title}</li>
                            {
                                cardData.map((val, idx) => 
                                    <>
                                        <li key={idx}>{val.asset_title}</li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div> :
                <div className='container-left' style={{"width": "80px"}}>
                    <div className='container-title-1'>
                        {
                            open ?
                            <BsArrowLeftShort size={24} className="leftright-arrow" onClick={handleClose} /> :
                            <BsArrowRightShort size={24} className="leftright-arrow" onClick={handleClose} />
                        }
                    </div>
                    {/* <div> */}
                        <div className="number">1</div>
                    {/* </div> */}
                </div>
            }
        </>
    )
}

export default LeftContainer