import React from "react";

const page_1Box = {
    backgroundColor: "white",
    padding: "20px",
    width: "1300px",
    height: "600px",
    
  }; 
  const Page_1Popup = (props) => {
    return <div style={page_1Box} className="page_1-popup">
      <form>
      <button className="page_1-popup" onClick={() => props.onClose()}>X</button>
      <hr/>
      
  
  
      </form>
    </div>
  };
  
  export {Page_1Popup}