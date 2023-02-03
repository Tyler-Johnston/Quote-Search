import { KeyboardEvent, useState } from 'react';
import { RandomQuote } from './components/randomQuote';
import { SpecificQuotes } from './components/specificQuotes';

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setIsSearched(true);
      setSearchQuery(userInput);
    }
  }

  return (
    <div className={isSearched ? "" : "center"}>
      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={handleKeyDown} value={userInput} onChange={e => setUserInput(e.target.value)} className="searchInput"/>
      {isSearched ? <SpecificQuotes id={0} author={searchQuery} content={""} results={[]}/> : <RandomQuote/>}
    </div>
  )
}

export default App