import React from 'react';//the imglist duty is to take the images from the app componenet and show them
import ImageListCard from "./ImageListCard";
import "./imageList.css";

const imageList = (props) => {
    const images = props.FoundImages.map((image) => {
        return (<ImageListCard key={image.id} image={image}  />
            )
    })
    return (

        <div className={'image-list'}>
            {images} 
        </div>
        )
}
export default imageList;