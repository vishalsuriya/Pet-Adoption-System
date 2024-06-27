import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Carousels =() =>{
  return (

 <Carousel controls={false} indicators={false} style={{ height: "500px", width: "100%" }} className="mt-1"> 
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/30/6b/20/306b20828bd03a2f36a85d8fe99ff3ce.jpg"
          className="d-block w-100 h-100"
          alt="..."
          style={{ maxHeight: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/fa/ed/5c/faed5cd36e9d7622ad2d640b7a0d61cc.jpg"
          className="d-block w-100"
          alt="..."
          style={{ maxHeight: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <img
          src="https://i.pinimg.com/564x/06/ca/98/06ca985e66acefc2b0d35745ea27691c.jpg"
          className="d-block w-100"
          alt="..."
          style={{ maxHeight: "500px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default Carousels;