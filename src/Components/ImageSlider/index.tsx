import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css"
export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchImage(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error:any) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== "") {
            fetchImage(url)
        }

    }, [url]);

    setTimeout(()=>{
        handleNext()
    },2000)
     function handldePrevious() {
         setCurrentSlide(currentSlide==0? images.length-1:currentSlide-1)
     }
     function handleNext() {
    setCurrentSlide(currentSlide==images.length-1? 0:currentSlide+1)
     }
    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left"  onClick={handldePrevious}/>
            {images.length > 0 &&
                images.map((imageItem:any,index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={currentSlide==index? "current-image" :"current-image hide-current-image"}
                    />
                ))}
            <BsArrowRightCircleFill className="arrow arrow-right"  onClick={handleNext}/>
            <span className="circle-indicators">
        {images.length > 0 &&
            images.map((_, index) => (
                <button key={index} onClick={()=>setCurrentSlide(index)} className={currentSlide==index ? "current-indicator": "current-indicator inactive-indicator" }></button>
            ))}
      </span>
        </div>
    );
}
