import React from "react";
import { Slide } from "react-slideshow-image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const slideImages = [
  require("../img/shopping-time-banner.jpg"),
  require("../img/laptop_Banner.jpg"),
  require("../img/Love-shopping-bannner.jpg"),
];
const properties = {
  infinite: true,
  autoplay: true,
  indicators: true,
  prevArrow: (
    <div className="w-[30px] cursor-pointer p-2 relative left-5 md:left-10 transition-all hover:bg-slate-200">
      <AiOutlineLeft />
    </div>
  ),
  nextArrow: (
    <div className="w-[30px] cursor-pointer p-2 relative right-5 md:right-10 transition-all hover:bg-slate-200">
      <AiOutlineRight />
    </div>
  ),
};
const HeaderSlider = () => {
  return (
    <div className="px-5 md:px-10 pt-6 w-full">
      <Slide {...properties} easing="ease">
        {slideImages.map((img, index) => (
          <div
            key={index}
            className="xl:h-[550px] md:h-[400px] sm:h-[350px] h-[300px]"
          >
            <div
              className="h-full bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HeaderSlider;
