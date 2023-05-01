import React from 'react'
import Header from './Header'
import AccountDropdown from '../AccountDropdown/AccountDropdown'
import Typography from '@mui/material/Typography'

const PlaylistHeader = () => {
  return (
    <div className="h-52 bg-cover bg-center bg-gray-900 justify-between flex flex-col" style={{backgroundImage:"url('https://th.bing.com/th/id/R.b61b28f1af9c5cab770b37992c671147?rik=LZXOhdwSxgKwtg&pid=ImgRaw&r=0')",backgroundColor:"#737272"}}>
        <div className='self-end m-2 text-white'>
            <AccountDropdown/>
        </div>
        <div className="text-white mx-6 pb-4 opacity-0.1">
            <p className="mx-2">Public Playlist</p>
            <Typography variant="h1" component="h1">Brain Food</Typography>
        </div>
    </div>
  )
}

export default PlaylistHeader