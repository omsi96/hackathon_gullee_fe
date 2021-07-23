import React from "react";
import "../../style/message.css";
const AuthView = ({ title, onSubmit }) => {
  return (
    <div className="viewBody">
      <h1 className="center">{title}</h1>|
      <div className="center">
        <input placeholder="email" className="cInput" />
        <input placeholder="password" type="password" className="cInput" />
        <button className="b">{title}</button>
      </div>
    </div>
  );
};

export default AuthView;
