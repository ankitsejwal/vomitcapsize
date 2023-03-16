import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (event) => setText(event.target.value);
  const upperCase = () => setText(text.toUpperCase());
  const lowerCase = () => setText(text.toLowerCase());
  const copyText = () => navigator.clipboard.writeText(text);
  const clearText = () => setText("");

  const capitalizeCase = () => {
    let words = text.trim().split(" ");
    let capitalizedWords = [];

    for (let w of words) {
      capitalizedWords.push(w.replace(w[0], w[0].toUpperCase()));
    }
    words = capitalizedWords.join(" ");
    setText(words);
  };

  const removeWhiteSpace = () => {
    let words = text.split(" ");
    let sanitizedWords = [];

    for (let w of words) {
      if (w) {
        sanitizedWords.push(w);
      }
    }
    setText(sanitizedWords.join(" "));
  };

  return (
    <>
      <div className="container mt-5 px-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Paste/Type your text here:
        </label>
        <textarea
          className="form-control my-3"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary m-1" onClick={upperCase}>
          UPPERCASE
        </button>
        <button className="btn btn-secondary m-1" onClick={lowerCase}>
          lowercase
        </button>
        <button className="btn btn-info m-1" onClick={capitalizeCase}>
          Capitalize
        </button>
        <button className="btn btn-danger m-1" onClick={clearText}>
          clear
        </button>
        <button className="btn btn-info m-1" onClick={copyText}>
          Copy text
        </button>
        <button className="btn btn-info m-1" onClick={removeWhiteSpace}>
          Remove white spaces
        </button>
      </div>
      <div className="container p-5">
        <h3>Summary</h3>
        <p>
          characters: <strong>{text.length}</strong> <br />
          words: <b>{text.split(" ").length}</b>
        </p>
        <p>
          Reading time <b>{Math.round(0.008 * text.split(" ").length)}</b>{" "}
          minutes
        </p>
        <div className="contianer mt-5">
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
