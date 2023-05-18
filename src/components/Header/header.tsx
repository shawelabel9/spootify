import React from 'react'
import { HeaderButton } from '../Button/HeaderButton'
import MenuItem from '@mui/material/MenuItem'
import { Select } from '@mui/material'
import AccountDropdown from '../AccountDropdown/AccountDropdown'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between gap-2 text-white">
        <div>
            <HeaderButton onClick={() => {navigate('/home')}}>Playlists</HeaderButton>
            <HeaderButton onClick={() => {navigate('/home/podcasts')}}>Podcasts</HeaderButton>
            <HeaderButton onClick={() => {navigate('/home/audio-books')}}>Audio books</HeaderButton>
            <HeaderButton onClick={() => {navigate('/home/artists')}}>Artists</HeaderButton>
            <HeaderButton onClick={() => {navigate('/home/albums')}}>Albums</HeaderButton>
        </div>
        <div className="m-6">
            <AccountDropdown/>
        </div>
    </div>
  )
}

export default Header