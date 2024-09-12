import React from 'react'
import img1 from '../../assets/new/departments-1.jpg'
import img2 from '../../assets/new/departments-2.jpg'
import img3 from '../../assets/new/departments-3.jpg'
import img4 from '../../assets/new/departments-4.jpg'
import img5 from '../../assets/new/departments-5.jpg'

const DepartmentImg = ({ selectDeal }) => {
  const images = {
    Cardiology: img1,
        Neurology:img2,
        Hepatology:img3 ,
        Pediatrics:img4 ,
        Ophthalmologists:img5 ,
  }
  return (
    <div className='h-75'>
        <img className='w-100 h-100' src={images[selectDeal]} alt="notfound"/>
    </div>
  )
}

export default DepartmentImg