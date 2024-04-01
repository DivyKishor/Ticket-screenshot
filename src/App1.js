import logo from "./logo.svg";
import "./App.css";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { ScreenCapture } from "react-screen-capture";
import { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReportIssue from "./ReportIssue";
import CustomArea from "./CustomArea";
import Save from "./Save";
import IssueForm from "./IssueForm";

function App() {
  const [screenCapture, setScreenCapture] = useState("");
  const [showChatIcon, setShowChatIcon] = useState(true);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [issueShow, setIssueShow] = useState(false);
  const [CustomAreaShow, setCustomAreaShow] = useState(false);
  const [saveShow, setSaveShow] = useState(false);
  const [obj, setObj] = useState({});

  useEffect(() => {
    setObj(screenCapture);
  }, [screenCapture]);

  const onOpenModal1 = () => setModal1Open(true);
  const onCloseModal1 = () => setModal1Open(false);

  const onOpenModal2 = () => {
    setModal2Open(true);
    setModal1Open(false);
  };
  const onCloseModal2 = () => {
    setModal2Open(false);
    setShowChatIcon(true);
  };

  const showSave = () => {
    setSaveShow(true);
    setCustomAreaShow(false);
    setIssueShow(false);
    setShowChatIcon(false);
  };
  const hideSave = () => {
    setSaveShow(false);
    setShowChatIcon(true);
  };

  const showCustomArea = () => {
    setCustomAreaShow(true);
    setIssueShow(false);
    setShowChatIcon(false);
  };
  const hideCustomArea = () => {
    setCustomAreaShow(false);
    setShowChatIcon(true);
  };

  const showReportIssue = () => {
    setIssueShow(true);
    setShowChatIcon(false);
  };
  const hideReportIssue = () => {
    setIssueShow(false);
    setShowChatIcon(true);
  };

  const handleScreenCapture = (screenCapture) => {
    showSave();
    setScreenCapture({ screenCapture });
    setObj(screenCapture);
    onOpenModal1();
  };

  const handleSave = () => {
    const screenCaptureSource = screenCapture;
    setObj(screenCapture);
    console.log(screenCaptureSource.screenCapture);
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    console.log(downloadLink);
    // downloadLink.click();
  };
  console.log(obj);
  return (
    <div>
      {/* Raise ticket modal */}
      <Modal open={modal2Open} onClose={onCloseModal2}>
        <div className="raise-issue-ticket-div">
          <div className="canvas-content">
            {/* screenshot section */}
            <div className="modal-header">
              <IoMdArrowBack />
              <div className="modal-heading">Screenshot Based Ticket</div>
              <div className="modal-subtext">
                Please use button below to mask any PII information in the
                screenshot
              </div>
            </div>
            <div className="centered-div">
              <img src={obj.screenCapture} alt="react-screen-capture" />
            </div>
          </div>
          <div className="raise-issue-ticket-form">
            <IssueForm onCancelClick={onCloseModal2}/>
          </div>
        </div>
        
      </Modal>
      {/* screenshot-modal */}
      {/* <Modal open={modal1Open} onClose={onCloseModal1} center> */}
      <div className="screen-capture">
        {saveShow && <div className="modal">
          <div className="modal-content">
            <div className="centered-div">
              <img src={obj.screenCapture} alt="react-screen-capture" />
            </div>
          </div>
        </div>}
      </div>
      {/* </Modal> */}
      <ScreenCapture onEndCapture={handleScreenCapture}>
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
            {showChatIcon && (
              <div className="icon-div">
                <div className="icon-box" onClick={showReportIssue}>
                  <IoChatboxEllipses />
                </div>
              </div>
            )}
            <div className="screenShotMenus">
              {issueShow && (
                <ReportIssue
                  onCloseClick={hideReportIssue}
                  onButtonClick={showCustomArea}
                />
              )}
              {CustomAreaShow && (
                <CustomArea
                  onCloseClick={hideCustomArea}
                  onStartCapture={()=>{onStartCapture(); hideCustomArea();}}
                />
              )}
              {saveShow && (
                <Save
                  onSaveClick={() => {
                    onOpenModal2();
                    hideSave();
                  }
                }
                  onCloseClick={hideSave}
                  onRefreshClick={()=>{onStartCapture(); hideSave();}}
                />
              )}
            </div>
          </div>
        )}
      </ScreenCapture>
    </div>
  );
}

export default App;
