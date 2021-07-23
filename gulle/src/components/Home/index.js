import React from "react";
import "../../style/message.css";
const index = () => {
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
          <input placeholder="name" name="name" className="cInput nameInput" />
          <textarea
            name="comment"
            form="usrform"
            className="cInput"
            rows="10"
            cols="100"
            maxlength="20"
          >
            your message
          </textarea>
          <button className="b">send your message</button>
        </div>
      </div>
    </div>
  );
};

export default index;
