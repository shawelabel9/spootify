import React from 'react'
import Header from '../../components/Header/Header'
import PlaylistCard from '../../components/Card/PlaylistCard'
import Playlist from '../playlist/playlist'
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable'

const Home = () => {
    return (
        <div className="bg-zinc-700">
            <div className="flex flex-col min-h-screen mx-auto px-2 max-w-4xl rounded-xl bg-zinc-800">
                {/* <Header /> */}
                {/* <PlaylistCard title="Hot Country" category='Playlist. Spotify'/> */}
                <Playlist/>
                <PlaylistTable/>
            </div>
        </div>
    )   
}

export default Home
