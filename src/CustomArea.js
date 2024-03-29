import React from 'react'
import { IoMdClose } from "react-icons/io";

const CustomArea = ({onCloseClick, onButtonClick}) => {
  return (
    <div className="custom-area-div">
      <button className="btn" onClick={onButtonClick}>Custom Area</button>
      <button className="btn" onClick={()=>{}}>Full Screen</button>
      <button className="cancel-btn"onClick={onCloseClick}><IoMdClose /></button>
    </div>
  )
}

export default CustomArea
