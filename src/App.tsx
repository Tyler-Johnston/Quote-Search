import { KeyboardEvent, useState } from 'react'
import { RandomQuote } from './components/randomQuote';
import { SpecificQuotes } from './components/specificQuotes';

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isUIShifted, setIsUIShifted] = useState(false);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setIsUIShifted(true);
      setSearchQuery(userInput);
    }
  }

  return (
    <div className={isUIShifted ? "" : "center"}>
      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={handleKeyDown} value={userInput} onChange={e => setUserInput(e.target.value)} className="searchInput"/>
      {isUIShifted ? null : <RandomQuote/>}
      {isUIShifted ? <SpecificQuotes id={0} author={searchQuery} content={""} results={[]}/> : ""}
    </div>
  )
}

export default App