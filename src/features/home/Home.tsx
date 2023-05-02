import React from 'react'
import Header from '../../components/Header/Header'
import PlaylistCard from '../../components/Card/PlaylistCard'
import Playlist from '../playlist/playlist'
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable'
import Login from '../accounts/Login'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
    return (
        <div className="bg-zinc-700">
            <div className="flex flex-col min-h-screen mx-auto px-2 max-w-4xl rounded-xl bg-zinc-800">
                <Header />
                <Routes>
                    <Route index element={<PlaylistCard title="Hot Country" category='Playlist. Spotify'/>}></Route>
                    <Route path='/podcasts' element={<PlaylistCard title="Hot Country" category='Playlist. Spotify'/>}></Route>
                    <Route path='/audio-books' element={<PlaylistCard title="Hot Country" category='Playlist. Spotify'/>}></Route>
                    <Route path='/artists' element={<PlaylistCard title="Hot Country" category='Playlist. Spotify'/>}></Route>
                    <Route path='/albums' element={<PlaylistCard title="Hot Country" category='Playlist. Spotify'/>}></Route>
                </Routes>                
            </div>
        </div>
    )   
}

export default Home
