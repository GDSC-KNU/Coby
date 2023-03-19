import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from '../../images/banner1.png';
import img2 from '../../images/banner2.png';
import img3 from '../../images/banner3.png';
import img4 from '../../images/banner4.png';
import '../main/Carousel.css'

const SlideComponent = () => {
    const images = [
        {name : img1  
        },
        {name : img2 
        },
        {name : img3
        },
        {name : img4
        }
    ]
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
     });
    const imgSize = images.length;

    const moveSlide = (i) => {
        if (i < 0) {
            i = imgSize - 1;
          } else if (i > imgSize) {
            i = 0;
          }
        setCurrent(i);
    };

    function handleSlide(direction) {
        moveSlide(current + direction);
        console.log(imgSize)
    }

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

    return (
        <div>
            <div className="slide">
            <div className="btn" onClick={() => { handleSlide(-1); }}>&lt;</div>
            <div className="window">
                <div className="flexbox" style={style}>
                {images.map((img, i) => (
                    <div
                    key={i}
                    className="img"
                    style={{ backgroundImage: `url(${img.name})`}}
                    ></div>
                ))}
                </div>
            </div>
            <div className="btn" onClick={() => { handleSlide(1); }}>&gt;</div>
            </div>
            <div className="position">
            {images.map((x, i) => (
                <div
                key={i}
                className={i === current ? 'dot current' : 'dot'}
                ></div>
            ))}
            </div>
        </div>
  );
};

export default SlideComponent;

