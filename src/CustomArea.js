import React from 'react'
import { IoMdClose } from "react-icons/io";

const CustomArea = ({onCloseClick, onStartCapture}) => {
  return (
    <div className="custom-area-div">
      <button className="btn" onClick={onStartCapture}>Custom Area</button>
      <button className="btn" onClick={()=>{}}>Full Screen</button>
      <button className="close-btn"onClick={onCloseClick}><IoMdClose /></button>
    </div>
  )
}

export default CustomArea
