import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slider.css";


const DemoCarousel = (props) => {
  return (
    <Carousel showThumbs={false} ariaLabel={false}>
      <div className="wrapper">
        <img alt="slide"  src={props?.images?.url1} />
        {/* <div className="chat">
        <InsertEmoticon/>
        <form>
          <input type="text" placeholder="Type your message"/>
          <button  >Send</button>
        </form>
        </div> */}
        <button className="legend">Type a message...</button>
       

      </div>
      <div className="wrapper">
        <img alt="slide" src={props?.images?.url2} />
        <button className="legend">Type a message...</button>
        

      </div>
      <div className="wrapper">
        <img alt="slide" src={props?.images?.url3} />
        <button className="legend">Type a message...</button>
      </div>
    </Carousel>
  );
};
export default DemoCarousel;
