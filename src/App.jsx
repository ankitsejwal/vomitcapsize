import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleOnChange = (e) => {
    // change the state of the text
    setText(e.target.value);

    // change the state of the wordCount
    const words = text.split(' ');
    const filteredWords = words.filter((word) => word != '');
    setWordCount(filteredWords.length);
  };

  const handleClear = () => {
    setText('');
    setWordCount(0);
  };
  const handleRemoveWhiteSpace = () => setText(text.trim());
  const handleCopytoClipboard = () => navigator.clipboard.writeText(text).then(() => console.log('copied'));
  const lowercase = () => setText(text.toLowerCase());
  const uppercase = () => setText(text.toUpperCase());
  const titlecase = () => {
    let firstword, restOfTheWord;
    const titleCaseTokenize = [];

    const tokenize = text.split(' ');
    tokenize.forEach((word) => {
      firstword = word.charAt(0).toUpperCase();
      restOfTheWord = word.slice(1).toLowerCase();
      titleCaseTokenize.push(firstword + restOfTheWord);
    });
    const titleCase = titleCaseTokenize.join(' ');
    setText(titleCase);
  };
  return (
    <>
      <header>
        <span>3</span> min read
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
            <span>{wordCount}</span> word
          </p>
          <p>
            <span>{text.trim().length}</span> characters
          </p>
        </div>
        {/* buttons goes here */}
        <div className="space-x-10">
          <button onClick={titlecase}>Titlecase</button>
          <button onClick={uppercase}>UPPERCASE</button>
          <button onClick={lowercase}>lowercase</button>
        </div>
      </footer>
    </>
  );
}

export default App;
