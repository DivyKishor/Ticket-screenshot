import React from 'react'
import { IoIosRefresh } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";


const Save = ({onSaveClick,onCloseClick, onRefreshClick}) => {
    return (
        <div className="save-div">
          <button className="save-btn btn" onClick={onSaveClick}><FaCheck />Save</button>
          <button className="btn" onClick={onRefreshClick}><IoIosRefresh /></button>
          <button className="cancel-btn"onClick={onCloseClick}><IoMdClose /></button>
        </div>
      )
}

export default Save
