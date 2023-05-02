import React from 'react'
import SpotifyIcon from '../../components/Icons/SpotfiyIcon'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import {StyledButton} from '../../components/Button/Button'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button'

const Signup = () => {
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
              <label><strong>What is your email?</strong></label>
              <TextField required placeholder='Enter your email.' type='email'/>
              <label><strong>Create a Password</strong></label>
              <TextField required placeholder='Create a password'type="password"/>
              <label><strong>Confirm your Password</strong></label>
              <TextField required placeholder='Create a password'type="password"/>
          </form>
        <Divider />
        <div className="my-8 text-center flex flex-col gap-4">
          <StyledButton variant="contained" className="">SIGN UP</StyledButton>
        </div>
        <div className="my-8 text-center flex justify-between gap-4">
          <p><strong >Already have an account?</strong></p>
          <Button variant='text' onClick={() => {navigate('/')}} style={{color:'#32C232',paddingBottom:'5px'}}> LOG IN</Button>
        </div>
      </div>

    </>
  )
}

export default Signup