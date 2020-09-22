import React, { useState } from "react";
import PopupWindow from "./popup-window/PopupWindow"

const CreateTaskButton = (getClientsList) => {

    const [popUp, setShowPopUP] = useState(false);
  
    const showPopUp = () => {
        setShowPopUP(true);
    }
    
    const hideForm = () => {
    setShowPopUP(false);
    }
    return (
        <div className="create-task">
            <button 
                className="btn create-task__btn" 
                onClick={showPopUp}
            >
            Create new client
            </button>
            <PopupWindow show={popUp} hideForm={hideForm} getClientsList={getClientsList}/>
        </div>
    )

    
}

export default CreateTaskButton;
