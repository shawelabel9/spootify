import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500 ">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="" alt="React logo" />
        </a>
      </div>
      <h1 className="ml-20">Vite + React</h1>
      <p className="text-red-50">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
