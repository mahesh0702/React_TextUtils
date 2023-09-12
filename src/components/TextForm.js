import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleTextToSpeechClick =() =>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("myBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
}

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary " onClick={handleLoClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleTextToSpeechClick}>
          To Speak
        </button>
      </div>
      <div className="container my-3">
        <h2>
          <u>Your text Summary -:</u>
        </h2>
        <p>
          <b>
            {text.split(" ").length} words and {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} Minutes read</b>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
