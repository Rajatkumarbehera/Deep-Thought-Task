import React from 'react';
import Card from '../Card/Card';
import question from '../../assets/question.svg';
import meeting from '../../assets/meeting.svg';
import schedule from '../../assets/schedule.svg';
import './MiddleContainer.css';

const MiddleContainer = ({ data, cardData }) => {
    return (
        <div className="container-middle">
            <div className="heading">
                <h5 className='title'>{data.title}</h5>
                <button type='submit' className='submit'>Submit task</button>
            </div>
            <div className="sub-heading">
                <h5 className="sub-heading-title">{data.tasks?.[0].task_title}</h5>
                <p className="desc">{data.tasks?.[0].task_description}</p>
            </div>

            <Card cardData={cardData} />

            <div className="sidebar-icons">
                <img src={question} alt="" style={{"backgroundColor": "blue"}} className="sidebar-icon" />
                <img src={meeting} alt="" style={{"backgroundColor": "blue"}} className="sidebar-icon" />
                <img src={schedule} alt="" style={{"backgroundColor": "blue"}} className="sidebar-icon" />
            </div>
        </div>
    )
}

export default MiddleContainer