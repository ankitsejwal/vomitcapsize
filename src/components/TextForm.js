import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Enter text here");

  const upperCase = () => setText(text.toUpperCase());
  const lowerCase = () => setText(text.toLowerCase());

  const handleOnChange = (event) => {
    console.log("key pressed");
    setText(event.target.value);
  };

  return (
    <>
      <div className="my-5 p-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Paste/Type your text here:
        </label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={upperCase}>
        UPPERCASE
      </button>
      <button className="btn btn-danger mx-1" onClick={lowerCase}>
        lowercase
      </button>
    </>
  );
}
