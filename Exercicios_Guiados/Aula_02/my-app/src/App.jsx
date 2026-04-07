import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Olá, Mundo!</h1>
          <p>{count > 0 ? `Você clicou ${count} vezes` : 'Clique no botão para incrementar o contador'}</p>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
    </>
  )
}

export default App
