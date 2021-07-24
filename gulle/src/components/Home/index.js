import React, { useState } from "react";
import "../../style/message.css";
import app from "../../firebase/firebase";

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function addMessage({ message, name }) {
    const db = app.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection("messages")
      .add({
        name,
        message,
      })
      .then(() => alert("masseage added !"));
  }
  return (
    <div
      className="center viewBody"
      style={{ marginTop: "100px", width: "1000px" }}
    >
      <h2 className="center">✦ send a message to your professor ✦</h2>
      <div className="container">
        <div>
          <iframe
            width="500px"
            height="340px"
            title="icon"
            src="https://embed.lottiefiles.com/animation/61338"
          ></iframe>
        </div>
        <div className="inputes">
          {/* <h3>get in touch</h3> */}
          <input
            placeholder="name"
            name="name"
            className="cInput nameInput"
            onChange={handleChange}
          />
          <textarea
            name="message"
            form="usrform"
            className="cInput"
            onChange={handleChange}
          >
            your message
          </textarea>
          <button className="b" onClick={() => addMessage(form)}>
            send your message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
