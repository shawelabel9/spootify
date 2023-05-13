import React, { useState } from 'react'
import SpotifyIcon from '../../components/Icons/SpotfiyIcon'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import {StyledButton} from '../../components/Button/Button'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'

const Signup = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPass,setConfirmPass] = useState("")
  const [error,setError] = useState("")

  const validatePass = () => {
    let isValid = true
    if(password && confirmPass){
      if(password !== confirmPass){
        isValid = false
        console.log("pass doesn't match")
        setError("passwords don't match")
      }else if(password.length < 6){
        isValid = false
        setError("pass should at least be 6 characters ")
      }
    }
    return isValid
  }

  const register = (e:any) =>{
    e.preventDefault()
    setError('')
    if(validatePass()){
      try{
        createUserWithEmailAndPassword(auth,email,password)
        .then((res) => console.log(res.user) )
        .catch((err) => console.log(err.message) )
      }catch(e:any){
        console.log(e.message)
      }
    }
    setEmail('')
    setPassword('')
    setConfirmPass('')
  }
  return (
    <>
      <header className="flex justify-center m-5 gap-2 text-3xl">
          <SpotifyIcon />
          <p><strong>Spootify</strong></p>
      </header>
      <Divider/>
      <div className="mx-auto flex flex-col max-w-sm my-10">
          <form onSubmit={register} className="flex flex-col justify-center gap-2 my-10" >
            <label><strong>What is your email?</strong></label>
            <TextField value={email} required placeholder='Enter your email.' type='email' onChange={(e) => {setEmail(e.target.value)}}/>
            <label><strong>Create a Password</strong></label>
            <TextField required value={password} placeholder='Create a password'type="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <label><strong>Confirm your Password</strong></label>
            <TextField required value={confirmPass} placeholder='confirm password'type="password"onChange={(e) => {setConfirmPass(e.target.value)}}/>
            
            <div className="my-8 text-center flex flex-col gap-4">
              <StyledButton variant="contained" className="" type='submit'>SIGN UP</StyledButton>
            </div>
          </form>
        <div className="my-8 text-center flex justify-between gap-4">
          <p><strong >Already have an account?</strong></p>
          <Button variant='text' onClick={() => {navigate('/')}} style={{color:'#32C232',paddingBottom:'5px',}}> LOG IN</Button>
        </div>
      </div>
    </>
  )
}

export default Signup