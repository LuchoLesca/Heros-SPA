import React from 'react'

const ImageLarge = ({ src }) => {
    return (
        <img className="img-thumbnail rounded" src={src} style={{height:"40%", width: "100%"}} alt="img"/>
    )
};

export default ImageLarge;