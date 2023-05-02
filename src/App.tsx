import React from 'react'
import Login from './features/accounts/Login'
import Signup from './features/accounts/Signup'
import Home from './features/home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Playlist from './features/playlist/playlist'

function App() {

  return (
    <div className="m-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home/*" element={<Home/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/playlist" element={<Playlist/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
