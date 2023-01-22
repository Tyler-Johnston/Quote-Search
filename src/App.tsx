import { useState } from 'react'
import { RandomQuote } from './components/randomQuote';
import { SpecificQuotes } from './components/specificQuotes';

function App() {
  const [userInput, setUserInput] = useState("");
  const [isUIShifted, setIsUIShifted] = useState(false);

  //TODO: fix 'event' having 'implicitly any type'
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setUserInput(event.target.value);
      setIsUIShifted(true);
    }
  }

  return (
    <div className={isUIShifted ? "" : "center"}>
      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={handleKeyDown} className="searchInput"/>
      {isUIShifted ? null : <RandomQuote/>}
      {isUIShifted ? <SpecificQuotes author={userInput}/> : ""}
    </div>
  )
}

export default App