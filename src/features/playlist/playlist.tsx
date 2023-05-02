import React from 'react'
import PlaylistHeader from '../../components/Header/PlaylistHeader'
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable'

const Playlist = () => {
  return (
    <>
    <div className="bg-zinc-700">
        <div className="flex flex-col min-h-screen mx-auto px-2 max-w-4xl rounded-xl bg-zinc-800">
            <PlaylistHeader/>
            <PlaylistTable/>
        </div>
    </div>
    </>
  )
}

export default Playlist