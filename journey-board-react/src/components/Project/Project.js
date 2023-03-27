import React from 'react'

const Project = ({ val }) => {
    return (
        <div className="video">
            <iframe width="480px" height="291px" src={val.asset_content} title="You tube video"></iframe>
        </div>
    )
}

export default Project