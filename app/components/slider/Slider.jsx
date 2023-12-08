"use client";

import { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    const props = this.props;
    const children = props.children;
    const showThumbs = props.showThumbs;
    const autoPlay = props.autoPlay;
    const infiniteLoop = props.infiniteLoop;
    const showArrows = props.showArrows;
    const swipeable = props.swipeable;
    const emulateTouch = props.emulateTouch;
    const className = props.className;
    const showStatus = props.showStatus;
    return (
      <Carousel
        showThumbs={showThumbs ?? false}
        autoPlay={autoPlay ?? true}
        infiniteLoop={infiniteLoop ?? true}
        showArrows={showArrows ?? false}
        swipeable={swipeable ?? true}
        emulateTouch={emulateTouch ?? true}
        useKeyboardArrows={true}
        showStatus={showStatus ?? false}
        className={`${className}`}
      >
        {children}
      </Carousel>
    );
  }
}
