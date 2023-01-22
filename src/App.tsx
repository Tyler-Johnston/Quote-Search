import { useState } from 'react'
import { Main } from './pages/main';
import { Other } from './pages/other';

function App() {
  const [pageName, setPageName] = useState("main");

  return (
    <div>
      <h1>Quote Search</h1>
      <input placeholder="Albert Einstein" onKeyDown={() => setPageName("other")}/>
        {pageName === "main" && <Main/>}
        {pageName === "other" && <Other/>}
    </div>
  )
}

export default App
