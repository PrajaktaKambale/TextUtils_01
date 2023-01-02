import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    setText("You have clicked on handleUpClick");
  };
  const handleOnChange = () => {
    console.log("On Change");
  };
  const [text, setText] = useState("Enter text here");
  // text="new State"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onclick={handleUpClick()}>
        Convert to UpperCase
      </button>
    </div>
  );
}
