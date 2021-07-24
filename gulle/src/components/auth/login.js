import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../firebase/authContext";
import "../../style/message.css";
const AuthView = ({ title, action }) => {
  const [form, setForm] = useState({
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();
  const { currentUser } = useAuth();
  const history = useHistory();
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword && title != "login") {
      return setError("passwords do not matching");
    }
    try {
      await action(form.email, form.password);
      if (currentUser) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="viewBody">
      <h1 className="center">{title}</h1>|
      <div className="center">
        <input
          placeholder="email"
          className="cInput"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          className="cInput"
          name="password"
          onChange={handleChange}
        />
        {title === "register" ? (
          <input
            placeholder="confirm password"
            type="password"
            className="cInput"
            name="confirmPassword"
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
        <button className="b" onClick={() => handleSubmit()}>
          {title}
        </button>
        {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
      </div>
    </div>
  );
};

export default AuthView;
