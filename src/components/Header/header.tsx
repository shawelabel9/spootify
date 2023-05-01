import React from 'react'
import { HeaderButton } from '../Button/HeaderButton'
import MenuItem from '@mui/material/MenuItem'
import { Select } from '@mui/material'
import AccountDropdown from '../AccountDropdown/AccountDropdown'

const Header = () => {
  return (
    <div className="flex justify-between gap-2 text-white">
        <div>
            <HeaderButton>Playlists</HeaderButton>
            <HeaderButton>Podcasts</HeaderButton>
            <HeaderButton>Audio books</HeaderButton>
            <HeaderButton>Artists</HeaderButton>
            <HeaderButton>Albums</HeaderButton>
        </div>
        <div className="m-6">
            <AccountDropdown/>
        </div>
    </div>
  )
}

export default Header