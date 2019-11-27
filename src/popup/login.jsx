import React from "react";

const loginBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "400px",
    height: "600px",
    
  }; 
  const LoginPopup = (props) => {
    return <div style={loginBox} className="login-popup">
      <form>
      <button className="login-close-popup" onClick={() => props.onClose()}>X</button>
      <h1 className="login">Giriş Yap</h1>
      <hr/>
      
  
  
      </form>
    </div>
  };
  
  export {LoginPopup}