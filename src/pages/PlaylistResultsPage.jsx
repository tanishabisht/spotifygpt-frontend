import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PromptMessage, SongCard, PlaylistCard } from '../components'
import { CREATE_PLAYLIST_URL } from '../utils/constants'
import axios from 'axios'

const extractTrackIds = (tracks) => {
    return tracks.map(track => track.id)
}

const PlaylistResultsPage = () => {
    const { state } = useLocation();

    const search = state?.search || '';
    const tracks = state?.tracks || [];

    // states
    const [songs, setSongs] = useState(tracks)
    const [playlistName, setPlaylistName] = useState('')
    const [playlistLink, setPlaylistLink] = useState('')
    const [playlistImgLink, setPlaylistImgLink] = useState('')

    // handle states
    const onPlaylistNameChange = (e) => setPlaylistName(e.target.value)
    const onRemoveSong = (trackId) => {
        const _songs = [...songs]
        const id = _songs.findIndex(track => track.id === trackId);
        if (id !== -1) _songs.splice(id, 1)
        setSongs(_songs)
    }

    const handleCreatePlaylistApi = async () => {
        console.log(playlistName)
        if (playlistName !== '') {
            const access_token = localStorage.getItem('access_token')
            const user_id = localStorage.getItem('user_id')
            try {
                const data = {
                    user_id: user_id,
                    name: playlistName,
                    track_ids: extractTrackIds(tracks),
                    access_token: access_token
                }
                console.log(data)
                const response = await axios.post(CREATE_PLAYLIST_URL, data);
                console.log(response.data.playlist_link)
                setPlaylistImgLink(tracks[0].images[1].url)
                setPlaylistLink(response.data.playlist_link)
            } catch (error) {
                console.error('Error during handle request', error);
            }
        }
    }

    return (
        <div className='results_container'>
            <PromptMessage clickable={false}>{search}</PromptMessage>
            <p className='results_label'>Discover your perfect playlist: handpicked tunes tailored to your mood.</p>

            <div className='songs_container'>
                {songs.map((track, id) => <SongCard
                    key={id}
                    name={track.name}
                    artists={track.artists}
                    img={track.images[0].url}
                    onRemove={() => onRemoveSong(track.id)}
                />)}
            </div>

            <div className='playlist_form_container'>
                <input
                    type='text'
                    className='playlist_form_input'
                    onChange={onPlaylistNameChange}
                    placeholder="Name your playlist..."
                    value={playlistName}
                />
                <button disabled={!(playlistName !== '')} onClick={handleCreatePlaylistApi} className='playlist_form_input_btn' type="button">Create a Playlist</button>
            </div>

            {playlistLink !== '' && <div className='playlist'>
                <PlaylistCard name={playlistName} img={playlistImgLink} link={playlistLink} />
            </div>}


        </div>
    );
};

export default PlaylistResultsPage;





