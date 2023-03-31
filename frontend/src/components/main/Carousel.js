import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-theme.css"; 
import "./slick.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import img1 from '../../images/banner1.png';
import img2 from '../../images/banner2.png';
import img3 from '../../images/banner3.png';
import img4 from '../../images/banner4.png';


export default class CenterMode extends Component {
  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        {'<'}
      </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        {'>'}
      </button>
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SlickArrowRight/>,
        prevArrow: <SlickArrowLeft/>
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="banner1" onClick={()=>{window.open("https://sites.google.com/view/gdeveloperskorea/gdsc")}}/>
          </div>
          <div>
            <img src={img2} alt="banner2" onClick={()=>{window.open("https://sites.google.com/view/gdeveloperskorea/gdsc")}}/>
          </div>
          <div>
            <img src={img3} alt="banner3" onClick={()=>{window.open("https://sites.google.com/view/gdeveloperskorea/gdsc")}}/>
          </div>
          <div>
            <img src={img4} alt="banner4" onClick={()=>{window.open("https://sites.google.com/view/gdeveloperskorea/gdsc")}} />
          </div>
        </Slider>
      </div>
    );
  }
}