import React from 'react'
import './Card.css';
import Project from '../Project/Project';
import ThreadBuild from '../Threadbuild/ThreadBuild';
import Pointer from '../Pointer/Pointer';
import FourSA from '../4SA/FourSA';

const Card = ({ cardData }) => {

    return (
        <>
            {
                cardData?.map((val, idx) => 
                    <div className='card-container' key={idx}>
                        <div className='title-container'>
                            <p className="card-title">{val.asset_title}<span className='info'>i</span></p>
                        </div>
                        <div className="description">
                            <p><span className='desc-title'>Description:</span>{val.asset_description}</p>
                        </div>

                        {
                            val.asset_type === "display_asset" && val.asset_content_type === "video" ?
                                <Project val={val} /> :
                            val.asset_type === "input_asset" && val.asset_content_type === "threadbuilder" ?
                                <ThreadBuild val={val} /> :
                            val.asset_type === "input_asset" && val.asset_content_type === "article" ?
                                <Pointer val={val} /> :
                            val.asset_type === "display_asset" && val.asset_content_type === "article" ?
                                <FourSA val={val} /> :
                            <div></div>
                        }
                    </div>
                )
            }
        </>
    )
}

export default Card