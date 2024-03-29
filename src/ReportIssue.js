import React from 'react';
import { BiScreenshot } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const ReportIssue = ({onCloseClick, onButtonClick}) => {
  return (
    <div className="report-issue">
        <div className="report-issue-heading">Facing Problem ?</div>
        <div className="report-issue-summary">Our web support team is here to help! Feel free to reach out with any questions or issues you are facing while navigating our website.</div>
        <div className="report-issue-footer">Report an issue</div>
        <button className="take-screenshot-btn" onClick={onButtonClick}><BiScreenshot /> Take Screenshot</button>
        <div onClick={onCloseClick} className="close-box"><IoMdClose /></div>
    </div>
  )
}

export default ReportIssue
