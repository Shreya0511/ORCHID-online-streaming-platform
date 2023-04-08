import React from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from './Data';
import './App.css';
const Slidebar=()=> {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div className='pt-20 box'>
        <Slider {...settings}>
        
          {data.map((item)=>(
            <div className='card'>
                <div className='top'>
                <img src={item.linking} alt={item.title}/>
                <h1>{item.title}</h1>
                </div>
                <div className='bottom'>
                    <h3>{item.sign}</h3>
                </div>
            </div>
          ))}
        </Slider>  
    </div>
  )
}

export default Slidebar
