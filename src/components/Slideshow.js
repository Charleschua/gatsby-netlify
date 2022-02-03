import React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import "../css/main.css"

import { images } from "../constants/carouselData"

const Slideshow = () => {
  const properties = {
    indicators: true,
    canSwipe: true,
  }

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {images.map((images, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${images.img})` }}>
              <div className="center">
                <h1>{images.title}</h1>
                <p>{images.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slideshow
