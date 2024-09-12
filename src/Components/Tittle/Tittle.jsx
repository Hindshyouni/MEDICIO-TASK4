import React from 'react';
import './Tittle.css';

const Tittle = ({tittle,text1}) => {
  return (
    <div className='text-center border-bottomm'>
      <div className="green-line py-3"><h1>{tittle}</h1></div>
      <p className='text-center mt-2 pb-3'>{text1}</p>
    </div>
  );
};

export default Tittle;