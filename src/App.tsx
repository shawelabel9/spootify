import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="" alt="React logo" />
        </a>
        <p className="text-blue-500">Hello World</p>
      </div>
    </div>
  )
}

export default App
