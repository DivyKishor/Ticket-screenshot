import logo from "./logo.svg";
import "./App.css";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { ScreenCapture } from "react-screen-capture";
import { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReportIssue from './ReportIssue';
import CustomArea from "./CustomArea";

function App() {
  const [screenCapture, setScreenCapture] = useState("");
  const [showChatIcon, setShowChatIcon] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [issueShow, setIssueShow] = useState(false);
  const [CustomAreaShow, setCustomAreaShow] = useState(false);

  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);

  const showCustomArea = () => {setCustomAreaShow(true); setIssueShow(false); setShowChatIcon(false)}
  const hideCustomArea = () => {setCustomAreaShow(false); setShowChatIcon(true);}

  const showReportIssue = () => {setIssueShow(true); setShowChatIcon(false)}
  const hideReportIssue = () => {setIssueShow(false); setShowChatIcon(true);}

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture({ screenCapture });
    onOpenModal();
  };

  const handleSave = () => {
    const screenCaptureSource = screenCapture;
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <div>
      <Modal open={modalOpen} onClose={onCloseModal} center>
        <div>
          <div>
            {/* screenshot section */}
            <div className="modal-header">
              <IoMdArrowBack />
              <h3>Screenshot  Based Ticket</h3>
              <div>Please use button below to mask any PII information in the screenshot</div>
            </div>
          </div>
          <div>
            {/* Form */}
          </div>
        </div>
        <center>
          <img src={screenCapture} alt="react-screen-capture" />
          <p>
            {screenCapture && <button onClick={handleSave}>Download</button>}
          </p>
        </center>
      </Modal>
    <ScreenCapture onEndCapture={handleScreenCapture} >
      {({ onStartCapture }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          { showChatIcon && 
          <div className="icon-div">
            <div className="icon-box" onClick={showReportIssue}>
              <IoChatboxEllipses />
            </div>
          </div>
          }
          {issueShow && <ReportIssue onCloseClick={hideReportIssue} onButtonClick={showCustomArea}/>}
          {CustomAreaShow && <CustomArea onCloseClick={hideCustomArea} onButtonClick={onStartCapture}/>}
          
        </div>
      )}
    </ScreenCapture>
    </div>
  );
}

export default App;
