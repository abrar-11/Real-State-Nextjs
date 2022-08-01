import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = ({ photos }) => {
   let settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed:2000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <div>
         <Slider {...settings}>
            {photos.map((photo, index) => {
               return (
                  <Image
                     key={index}
                     alt="Images"
                     blurDataURL={photo.url}
                     src={photo.url}
                     width={1000}
                     height={500}
                     sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                  />
               );
            })}
         </Slider>
      </div>
   );
};

export default ImageSlider;
