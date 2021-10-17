import React from 'react'
import { useState } from 'react'
import './Slide.css'
import SliderBtn from './SliderBtn'
import SliderData from './SliderData'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length)
    }
  }

  return (
    <div className='container-slider'>
      {SliderData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? 'slide active-anim' : 'slide'
            }>
            <img src={obj.image} alt='url' />
          </div>
        )
      })}
      <SliderBtn moveSlide={nextSlide} direction={'next'} />
      <SliderBtn moveSlide={prevSlide} direction={'prev'} />
    </div>
  )
}
