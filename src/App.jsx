import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleOnChange = (e) => setText(e.target.value);
  const handleClear = () => setText('');
  const handleRemoveWhiteSpace = () => setText(text.trim());
  const handleCopytoClipboard = () => navigator.clipboard.writeText(text).then(() => console.log('copied'));
  const handleLowercase = () => setText(text.toLowerCase());
  const handleUppercase = () => setText(text.toUpperCase());
  const handleTitlecase = () => {
    let firstLetter, restOfTheWord;
    const titleCaseTokenize = [];

    const tokenize = text.split(' ');
    tokenize.forEach((word) => {
      firstLetter = word.charAt(0).toUpperCase();
      restOfTheWord = word.slice(1).toLowerCase();
      titleCaseTokenize.push(firstLetter + restOfTheWord);
    });
    const titleCase = titleCaseTokenize.join(' ');
    setText(titleCase);
  };
  return (
    <>
      <header>
        <span>{Math.ceil(text.split(' ').length / 225)}</span> min read
      </header>
      <main>
        <textarea
          name=""
          id=""
          cols="50"
          rows="20"
          value={text}
          placeholder="Your long text goes here. Use the buttons at the bottom to alter your text."
          onChange={handleOnChange}
        ></textarea>

        {/* 3 buttons goes here */}
        <div className="space-x-10  bg-white">
          <button onClick={handleClear}>clear</button>
          <button onClick={handleRemoveWhiteSpace}>remove white space</button>
          <button onClick={handleCopytoClipboard}>paste</button>
        </div>
      </main>
      <footer>
        {/* word and character count goes here */}
        <div>
          <p>
            <span>{text.split(' ').filter((word) => word != '').length}</span> word
          </p>
          <p>
            <span>{text.trim().length}</span> characters
          </p>
        </div>
        {/* buttons goes here */}
        <div className="space-x-10">
          <button onClick={handleTitlecase}>Titlecase</button>
          <button onClick={handleUppercase}>UPPERCASE</button>
          <button onClick={handleLowercase}>lowercase</button>
        </div>
      </footer>
    </>
  );
}

export default App;
