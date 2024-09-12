import React, { useState } from 'react'
import './Lista.css'

const Lista = ({ setSelectDeal }) => {
    const [activeBtn, setActiveBtn] = useState("Ophthalmologists");

    const btnClick = (btnType) => {
        setActiveBtn(btnType);
        setSelectDeal(btnType);
    }





  return (
    <div className='pb-3'>
        <ul className="list-group ">
            <li className={ `border-0 border-end list-group-item ${activeBtn === "Cardiology" ? "activee" : ""}`} 
          onClick={() => btnClick("Cardiology")}>Cardiology</li>

            <li className={  ` border-0 border-end list-group-item ${activeBtn === "Neurology" ? "activee" : ""}`} 
          onClick={() => btnClick("Neurology")}>Neurology</li>

            <li className={ `border-0 border-end list-group-item ${activeBtn === "Hepatology" ? "activee" : ""}`} 
          onClick={() => btnClick("Hepatology")}>Hepatology</li>

            <li className={ `border-0 border-end list-group-item ${activeBtn === "Pediatrics" ? "activee" : ""}`} 
          onClick={() => btnClick("Pediatrics")}>Pediatrics</li>

            <li className={  `border-0 border-end list-group-item ${activeBtn === "Ophthalmologists" ? "activee" : ""}`} 
          onClick={() => btnClick("Ophthalmologists")}>Ophthalmologists</li>
        </ul>
    </div>

    
  )
}

export default Lista

