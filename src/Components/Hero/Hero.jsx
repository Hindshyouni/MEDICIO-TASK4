import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Hero.css'

const Hero = ({photo,title,text}) => {
  return (
    <>
     <Carousel className='my-5'>
      <Carousel.Item className='c-items'>
        <img className='c-img d-block w-100' src={photo?.carosel1} alt="doctor" />
        <Carousel.Caption className='bord text-height top-0 mt-5  rounded-1 opacity-75  mb-2 bg-light text-dark'>
          <h1 className='mt-5'>{title}</h1>
          <p className='my-2'>{text}</p>
          <button className="btn btn-primary bg-primary-color px-4 py-2 fs-5 mt-5 ">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-items'>
      <img className='c-img d-block w-100' src={photo?.carosel2} alt="doctor" />
      <Carousel.Caption className='bord text-height top-0 mt-5  rounded-1 opacity-75  mb-2 bg-light text-dark'>
          <h1 className='mt-5'>{title}</h1>
          <p className='my-2'>{text}</p>
          <button className="btn btn-primary bg-primary-color px-4 py-2 fs-5 mt-5 ">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-items'>
      <img className='c-img d-block w-100' src={photo?.carosel3} alt="doctor" />
      <Carousel.Caption className='bord text-height top-0 mt-5  rounded-1 opacity-75  mb-2 bg-light text-dark'>
          <h1 className='mt-5'>{title}</h1>
          <p className='my-2'>{text}</p>
          <button className="btn btn-primary bg-primary-color px-4 py-2 fs-5 mt-5 ">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero