import { useState } from 'react'
import { Main } from './pages/main';
import { Other } from './pages/other';

function App() {
  const [pageName, setPageName] = useState("main");
  const [userInput, setUserInput] = useState("");

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setUserInput(event.target.value);
      setPageName("other");
    }
  }

  return (
    <div>
      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={handleKeyDown}/>
        {pageName === "main" && <Main/>}
        {pageName === "other" && <Other/>}
    </div>
  )
}

export default App
