import React, { Component } from "react";
import Slider from "../src/slider";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      centerMode: false,
      dots: true,
      draggabe: true,
      focusOnSelect: false,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 1.5,
      speed: 500,
      swipeToSlide: true,
      preventFinalSlideAdvance: true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
