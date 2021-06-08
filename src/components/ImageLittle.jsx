import React from 'react'

const ImageLittle = ({ src }) => {
    return (
        <img src={src} style={{height:"100px", width: "100px"}} alt="img"/>
    )
};

export default ImageLittle;