import './calculator.css';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Calculator = () => {
  const [ inputValue, setInputValue ] = useState('');

  const inputField = useRef(null);

  // On the first render, set focus on the inputfield
  useEffect(() => {
      inputField.current.focus();
  }, [])

  function resetAll() {
    setInputValue('');
    inputField.current.focus();
  }

  // When an allowed value is entered in the input field, use that.
  function valueFunc(value) {
    const regexDigit = /^[\d]$/;
    const regexOther = /^[*/.+-]$/;
    if (regexOther.test(value)) {
      console.log(inputValue.slice(-1))
      // check wheter the last input was a digit, if so, add the command, if not, replace the command
      if (regexOther.test(inputValue.slice(-1))) {
        setInputValue(inputValue.slice(0, -1) + value)
      } else {
        setInputValue(inputValue + value);
      }
    } else if (regexDigit.test(value)) {
      setInputValue(inputValue + value);
    }
  }

  // If something else is typed, like a backspace or return, capture that.
  const handleKeyDown = event => {
    if (event.key === 'Backspace') {
      setInputValue(inputValue.slice(0, -1));
    }

    if (event.key === 'Enter') {
      setInputValue(String(eval(inputValue)));
    }
    // When a button is pressed, return focus to the inputField
    inputField.current.focus();
  };

  return (
    <div className='calc-view'>
      <section className="calculator">
        <input 
          ref={inputField}
          type="text"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => valueFunc(e.nativeEvent.data)}
        />
        <div className='buttonGrid'>
          <button className="spanTwoCol colorSpecial" onClick={() => resetAll()}>AC</button>
          <button onClick={(e) => valueFunc(e.target.innerText)}>/</button>
          <button onClick={(e) => valueFunc(e.target.innerText)}>*</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>7</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>8</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>9</button>
          <button onClick={(e) => valueFunc(e.target.innerText)}>-</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>4</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>5</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>6</button>
          <button onClick={(e) => valueFunc(e.target.innerText)}>+</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>1</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>2</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>3</button>
          <button className="spanTwoRow colorSpecial" onClick={(e) => handleKeyDown({key: "Enter"})}>=</button>
          <button className="digit" onClick={(e) => valueFunc(e.target.innerText)}>0</button>
          <button onClick={(e) => valueFunc(e.target.innerText)}>.</button>
          <button onClick={() => handleKeyDown({key: "Backspace"})}><FontAwesomeIcon icon={faDeleteLeft} /></button>
        </div>   
      </section>
      <div className="default-button">
        <a href="/#projects">Terug</a>
      </div>
    </div>
  )
}

export default Calculator