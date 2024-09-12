import React from 'react'
import { Button } from 'react-bootstrap'
import './Text.css'

const Text = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-color w-100 py-5'>
        <h2 className='text-center text-white'>In an emergency? Need help now</h2>
        <p className='text-center text-white w-75'>Some quick example text to build on the card title and make up thes content.Some quick example text to build on the c the card title and make up thes content.Some quick example text to build on the</p>
        <Button variant="outline-light">Make an Appointment</Button>
    </div>
  )
}

export default Text