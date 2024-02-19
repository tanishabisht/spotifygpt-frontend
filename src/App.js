import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingScreen from './Loading'
import { Link } from "react-router-dom";

const access_token = "BQBcxeFNTvmycJRk-ftGu2gFZcA50vHhSYZjfEtkNGXamzHxvDkuKPZpF6FfHVBjRvjOzExFrWudHKyOcChkD5HMRLBON05g0UD0lydsk6h06XjggRWNtdxxqLaFVUfyKkcOK0UjIskyiRgLGzdFsM7XAjKA6Yh8UzYHDGLqpBd_q8p_wYyPZwasuf1ApyIBHM9R59qbB9Xk7l513bCBc8aUvPk9aJ9litqQ8wYBdy6RX2d4aGA"
const user_id = "31e7p374nn5orc2p5nloy2kq7pvu"

function App() {

  const [loading, setLoading] = useState(false)

  const [songs, setSongs] = useState([])

  const [prompt, setPrompt] = useState('')
  const [num, setNum] = useState(2)

  const [playlist, setPlaylist] = useState('')
  const [playlistLink, setPlaylistLink] = useState('')

  const handleRemoveSong = (idToRemove) => {
    const updatedSongs = songs.filter(song => song.id !== idToRemove);
    setSongs(updatedSongs);
  }

  const handleSongSearch = async () => {
    const postData = {
      user_prompt: prompt,
      num_suggestions: num,
      access_token: access_token
    }
    console.log(postData)
    try {
      setLoading(true)
      const response = await axios.post('https://spotifygpt-yz7rgadd7a-uc.a.run.app/api/suggestions', postData);
      console.log('Response:', response.data);
      setSongs(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false)
    }
  }

  const handleCreatePlaylist = async() => {
    const trackIds = songs.map(track => track.id);
    const postData = {
      user_id: user_id,
      name: playlist,
      track_ids: trackIds,
      access_token: access_token
    }
    console.log(postData)
    try {
      setLoading(true)
      const response = await axios.post('https://spotifygpt-yz7rgadd7a-uc.a.run.app/api/create-playlist', postData);
      console.log('Response:', response.data);
      setPlaylistLink(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false)
    }
  }


  const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8000/spotify/login');
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // const handleLogin = async () => {
    //     const scope = "user-read-private user-read-email playlist-modify-private";
    //     const clientId = "b9c086fe966e45d3a838bcdfbbf5ea8b"; 
    //     const redirectUri = encodeURIComponent("http://localhost:8000/spotify/callback");
    //     const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${redirectUri}`;
    //     window.location.href = spotifyAuthUrl;
    // }


    
  return (
    <div className="App">
      <h1>Spotify GPT</h1>

      {loading && <LoadingScreen loadingText="Please wait..." />}

      <button onClick={handleLogin}> LOGIN</button>

      <div className="inputContainer">
        <input 
          className='inputText'
          type="text" 
          placeholder="Search the kind of song you want to listen..." 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <select 
          value={num} 
          onChange={(e) => setNum(e.target.value)}
          className='inputSelect'
        >
          <option value="2">2</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button className='inputBtn' onClick={handleSongSearch} type="button">Submit</button>
      </div>



      {songs.length!==0 && songs.map((track) => (
        <div className="songCardContainer" id={track.id} key={track.id}>
          <div className='songCardContent'>
            <img className='songImg' src={track.images[0].url} alt={track.name} />
            <div className="songContent">
            <a className='songLinkContainer' href={track.external_url} target="_blank" rel="noopener noreferrer">
              <h3 className='songName'>{track.name}</h3>
              </a>
              <p className='songArtists'>Artists: {track.artists.join(', ')}</p>
            </div>
          </div>
          <button onClick={() => handleRemoveSong(track.id)} className='songRemoveBtn'>Remove</button>
        </div>
      ))}


      <div className="inputContainer">
        <input 
          className='inputText'
          type="text" 
          placeholder="Enter the name of your playlist" 
          value={playlist}
          onChange={(e) => setPlaylist(e.target.value)}
        />
        <button className='inputBtn' onClick={handleCreatePlaylist} type="button">Create Playlist</button>
      </div>

      {playlistLink!=='' && <a className='songLinkContainer' href={playlistLink} target="_blank" rel="noopener noreferrer">
        <button className='btn'>Link to My Playlist</button>
      </a>}
      
      <br/>
      <br/>
      <br/>
    
    </div>
  );
}

export default App;
