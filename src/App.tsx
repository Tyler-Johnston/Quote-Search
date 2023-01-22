import { useState } from 'react'
import { RandomQuote } from './components/randomQuote';

function App() {
  const [userInput, setUserInput] = useState("");
  const [isUIShifted, setIsUIShifted] = useState(false);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setUserInput(event.target.value);
      setIsUIShifted(true);
    }
  }

  return (
    <div className={isUIShifted ? '' : 'center'}>

      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={handleKeyDown}/>
      {isUIShifted ? null : <RandomQuote/>}

    </div>
  )
}

export default App
