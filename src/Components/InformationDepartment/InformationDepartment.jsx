import React from 'react'

const InformationDepartment = ({ selectDeal }) => {

    const details={
        Cardiology: "Cardiology",
        Neurology:"Neurology",
        Hepatology:"Hepatology" ,
        Pediatrics:"Pediatrics" ,
        Ophthalmologists:"Ophthalmologists" ,
    }
  return (
    <div className=''>
            <h2 className='pb-4'>{details[selectDeal]}</h2>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure </p>
            <p className='pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laborum est, magni  distinctio sit possimus quisquam quia qu</p>
            </div>
  )
}

export default InformationDepartment