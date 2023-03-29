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
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <AiFillCaretRight/>,
        prevArrow: <AiFillCaretLeft/>
    };
    const images = [
      {
        name: img1,
        src:"../../images/banner1.png",
        url:"https://www.codestates.com/about/review"
      },
      {
        name: img2,
        src:"../../images/banner2.png",
        url:"https://www.codestates.com/course/pm"
      },
      {
        name: img3,
        src:"../../images/banner3.png",
        url:"https://gmb.oopy.io/careertalk1?_gl=1*ka9k4z*_ga*NTY1MzAzMDk3LjE2Nzg3MDA3NTU.*_ga_SMZR7SG3VX*MTY3OTA1ODc2MS44LjEuMTY3OTA1OTU4Ni4yMS4wLjA."
      },
      {
        name: img4,
        src:"../../images/banner4.png",
        url:"https://codestates-post.oopy.io/?_gl=1*zp5drg*_ga*NTY1MzAzMDk3LjE2Nzg3MDA3NTU.*_ga_SMZR7SG3VX*MTY3OTA1ODc2MS44LjEuMTY3OTA1OTYwNC4zLjAuMA.."
      },
    ]

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