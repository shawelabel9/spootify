import React, { useEffect } from 'react'
import Login from './features/accounts/Login'
import Signup from './features/accounts/Signup'
import Home from './features/home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Playlist from './features/playlist/playlist'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './services/firebase/firebase'
import {useDispatch} from 'react-redux'
import { setUser } from './Redux/reducer'
import VerifyEmail from './features/accounts/validateEmail'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth,(user) =>{
      dispatch(setUser(user))
    })
  },[])
  return (
    <div className="m-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route path="/verify-email" element={<VerifyEmail/>}></Route>
          <Route path="/home/*" element={<Home/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/playlist" element={<Playlist/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
