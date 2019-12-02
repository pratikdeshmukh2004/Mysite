import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
export class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <br/>
        <Carousel pauseOnHover={false}>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        <Carousel.Item>
          <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Slider
