import React from 'react'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status" style={{marginTop: "30vh", height: "10rem", width:"10rem"}}></div>
        </div>
    )
}

export default Loading;