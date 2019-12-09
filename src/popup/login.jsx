import React from "react";

const loginBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "1300px",
    height: "600px",
    
  }; 
  const LoginPopup = (props) => {
    return <div style={loginBox} className="login-popup">
      <form>
      <button className="login-close-popup" onClick={() => props.onClose()}>X</button>
      <hr/>
  
      </form>

      <form className="loginForm">
      <div className="userLoginHeader">Üye Girişi</div>
      <div className="userLoginInput">
      <input className="typeInput" placeholder="Email" value=""/>
      </div>
      <div className="userLoginInput">
			<input className="typeInput" placeholder="Şifre"/>
			</div>

      
      </form>
    </div>
  };
  
  export {LoginPopup}