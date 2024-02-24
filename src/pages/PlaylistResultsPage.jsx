import React, { useEffect, useState } from 'react';
import { PromptMessage, SongCard, PlaylistCard } from '../components'

const PlaylistResultsPage = (props) => {
    // const { search, tracks } = props;

    const search = 'Suggest a high-energy workout playlist with a combination of pop and electronic dance music'
    const tracks = [
        {
            artists: ['Queen'],
            external_url: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
            id: "7tFiyTwD0nx5a1eklYtX2J",
            images: [{ height: 640, url: "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a", width: 640 }],
            name: "Bohemian Rhapsody - Remastered 2011"
        },
        {
            artists: ['Queen'],
            external_url: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
            id: "7tFiyTwD0nx5a1eklYtX2J",
            images: [{ height: 640, url: "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a", width: 640 }],
            name: "Bohemian Rhapsody - Remastered 2011"
        },
        {
            artists: ['Queen'],
            external_url: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
            id: "7tFiyTwD0nx5a1eklYtX2J",
            images: [{ height: 640, url: "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a", width: 640 }],
            name: "Bohemian Rhapsody - Remastered 2011"
        },
        {
            artists: ['Queen'],
            external_url: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
            id: "7tFiyTwD0nx5a1eklYtX2J",
            images: [{ height: 640, url: "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a", width: 640 }],
            name: "Bohemian Rhapsody - Remastered 2011"
        }
    ]

    const [songs, setSongs] = useState(tracks)

    const onRemoveSong = (id) => {
        const _songs = songs
        _songs.splice(id, 1);
        setSongs(_songs)
        console.log(id, _songs)
    }

    return (
        <div className='results_container'>
            <PromptMessage clickable={false}>{search}</PromptMessage>
            <p className='results_label'>Discover your perfect playlist: handpicked tunes tailored to your mood.</p>

            <div className='playlist_container'>
                {songs.map((track, id) => <SongCard
                    key={id}
                    name={track.name}
                    artists={track.artists}
                    img={track.images[0].url}
                    onRemove={() => onRemoveSong(id)}
                />)}
            </div>

            <div className='createPlaylist_form'>
                <input />
                <button>Create a Playlist</button>
            </div>

            <div className='playlist'>
                <PlaylistCard />
            </div>
        </div>
    );
};

export default PlaylistResultsPage;





