import React, { useEffect, useState } from 'react'
import LeftContainer from '../LeftContainer/LeftContainer';
import MiddleContainer from '../MiddleContainer/MiddleContainer';
import RightContainer from '../RightContainer/RightContainer';
import './Main.css';

const Main = () => {
    const [data, setData] = useState([]);

    const cardData = data.tasks?.[0].assets;

    useEffect(() => {
        fetch("http://localhost:8000/data.json")
        .then(response => response.json())
        .then(res => setData(res))
    }, [])

    return (
        <div className='main-container'>
            <LeftContainer data={data} cardData={cardData} />

            <MiddleContainer data={data} cardData={cardData} />

            <RightContainer />
        </div>
    )
}

export default Main