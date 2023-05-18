import React, { useState } from 'react'
import SpotifyIcon from '../../components/Icons/SpotfiyIcon'
import { Divider,TextField } from '@mui/material'
import {StyledButton} from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword,sendEmailVerification } from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeActive } from '../../Redux/reducer'

const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const signIn = (e:any) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
      .then(() => {
        console.log(auth.currentUser)
        if(!auth.currentUser?.emailVerified){
          if(auth.currentUser){
            sendEmailVerification(auth.currentUser)
              .then( () =>{
                dispatch(setTimeActive(true))
                navigate('/verify-email');
              })
              .catch((err) => {alert(err.message)})
          }
        }else{
          navigate('/home')
        }
      })
      .catch((err) => alert(err.message))
  }
  
  return (
    <>
      <header className="flex justify-center m-5 gap-2 text-3xl">
          <SpotifyIcon />
          <p><strong>Spootify</strong></p>
      </header>
      <Divider/>
      <div className="mx-auto flex flex-col max-w-sm my-10">
        <form onSubmit={signIn} className="flex flex-col justify-center gap-2 my-10" >
          <label><strong>Email address or username</strong></label>
          <TextField value={email} required placeholder='Email address or username' type='email' onChange={(e) => setEmail(e.target.value)}/>
          <label><strong>Password</strong></label>
          <TextField value={password} required placeholder='Password'type="password" onChange={(e) => setPassword(e.target.value)}/>
          <StyledButton variant='contained' type="submit">Log in</StyledButton>
        </form>
        <Divider />
        <div className="my-8 text-center flex flex-col gap-4">
          <p><strong >Don't have an account?</strong></p>
          <StyledButton type='submit' variant="contained">SIGN UP FOR SPOTIFY</StyledButton>
        </div>
      </div>
    </>
  )
}

export default Login
