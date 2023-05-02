import React from 'react'
import SpotifyIcon from '../../components/Icons/SpotfiyIcon'
import { Divider,TextField } from '@mui/material'
import {StyledButton} from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  
  return (
    <>
        <header className="flex justify-center m-5 gap-2 text-3xl">
            <SpotifyIcon />
            <p><strong>Spootify</strong></p>
        </header>
        <Divider/>
        <div className="mx-auto flex flex-col max-w-sm my-10">
            <form className="flex flex-col justify-center gap-2 my-10" >
                <label><strong>Email address or username</strong></label>
                <TextField required placeholder='Email address or username' type='email'/>
                <label><strong>Password</strong></label>
                <TextField required placeholder='Password'type="password"/>
                <StyledButton variant='contained' type="submit" onClick={() => {navigate('/home')}}>Log in</StyledButton>
            </form>
          <Divider />
          <div className="my-8 text-center flex flex-col gap-4">
            <p><strong >Don't have an account?</strong></p>
            <StyledButton variant="contained" onClick={() => {navigate('/signup')}}>SIGN UP FOR SPOTIFY</StyledButton>
          </div>
        </div>

    </>
  )
}

export default Login
