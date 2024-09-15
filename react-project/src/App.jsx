import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '/src/button.jsx'

function App() {
  const [count, setCount] = useState(0)

  const music = {
    title: 'Parvaz',
    artist: 'Shadmehr'
  }
  const composer = {
    name: 'Shadmehr Aghili',
    age: 47,
    live: 'Los Angeles'
  }

  return (
    <>
      <p>
        {music.title} by {music.artist}
      </p>
      <p>
        composer: {composer.name} who is {composer.age} years old and lives in {composer.live}
      </p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Click here!</Button>
    </>
  )
}

export default App
