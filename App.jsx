import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('')
  const [displayedText, setDisplayedText] = useState('')

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText(inputText)
    setInputText('')
  };

  return (
    <div>
      <h1>Unesi tekst:</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Tekst:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button onClick={handleButtonClick}>Ispiši</button>
      </form>
      <div>
        <h2>Unešeni tekst:</h2>
        <p>{displayedText}</p> 
      </div>
    </div>
  );
};

export default App;
