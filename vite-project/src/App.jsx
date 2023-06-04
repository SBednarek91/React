import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Sebastian Bednarek</h1>
        <h2>nr albumu: 113793</h2>
      </div>
      <p></p>
      <img src="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/44/best-of-the-world-2022-national-geographic-oto-najciekawsze-miejsca-ktore-warto-odwiedzic-w-2022-roku_3.png" alt="Zdjęcie Łodzi" width={700} height={400}></img>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App;
