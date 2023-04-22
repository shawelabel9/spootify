import React from 'react'
import SpotifyIcon from '../../components/icons/SpotfiyIcon'
import { Divider,TextField } from '@mui/material'
import {Button} from '../../components/Button/Button'

const Login = () => {
  return (
    <>
        <header className="flex justify-center m-5 gap-2 text-3xl">
            <SpotifyIcon />
            <p><strong>Spotify</strong></p>
        </header>
        <Divider/>
        <div className="mx-auto flex flex-col max-w-sm my-20">
            <form className="flex flex-col justify-center gap-2" >
                <label><strong>Email address or username</strong></label>
                <TextField required placeholder='Email address or username'/>
                <label><strong>Password</strong></label>
                <TextField required placeholder='Password'type="password"/>
                <Button variant='contained' type="submit" >Log in</Button>
            </form>
            <Divider className="mt-10"/>
        </div>

    </>
  )
}

export default Login
