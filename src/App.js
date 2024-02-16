import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingScreen from './Loading'
import { Link } from "react-router-dom";

const access_token = "BQCMOSw4TqB_8YxycBNH-realzaoHfJGdLzag-ShxNU8Bik1400RwsVGjpDtR5s_sXx49XeUMGVfGu1t2GpEBzk-Zi6jW-Wq9AUPAoG2maPYt1rKocS2SEeMtLraEjeh4tvf4LWJOxN_6H8rcYEd1S-zuh2nwBBF1fDWAmeQ7kPJCa6EQB7plMkPIxGxbOBu2olggBX2jO8on0J6ImTgxNeTwDbZ9aC1Xs6TAUjdCVLy_EUkxzQ"
const user_id = "31e7p374nn5orc2p5nloy2kq7pvu"

function App() {

  const [loading, setLoading] = useState(false)

  const [songs, setSongs] = useState([
    {
        "id": "4UKXXrsLEQNHQQ8zhdRQ2a",
        "name": "BurjKhalifa - From \"Laxmii\"",
        "artists": [
            "Madhubanti Bagchi",
            "Nikhita Gandhi",
            "DJ Khushi",
            "Shashi"
        ],
        "external_url": "https://open.spotify.com/track/4UKXXrsLEQNHQQ8zhdRQ2a",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732fc6f2e537e3c2afa795ba60",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022fc6f2e537e3c2afa795ba60",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512fc6f2e537e3c2afa795ba60",
                "width": 64
            }
        ]
    },
    {
        "id": "63MvWd6T6yoS7h4AJ4Hjrm",
        "name": "Aankh Marey (From \"Simmba\")",
        "artists": [
            "Neha Kakkar",
            "Mika Singh",
            "Kumar Sanu",
            "Tanishk Bagchi"
        ],
        "external_url": "https://open.spotify.com/track/63MvWd6T6yoS7h4AJ4Hjrm",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02dc1f496d2a8d75f7fda092b6",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851dc1f496d2a8d75f7fda092b6",
                "width": 64
            }
        ]
    },
    {
        "id": "4eu27jAU2bbnyHUC3G75U8",
        "name": "Badtameez Dil",
        "artists": [
            "Pritam",
            "Benny Dayal",
            "Shefali Alvares"
        ],
        "external_url": "https://open.spotify.com/track/4eu27jAU2bbnyHUC3G75U8",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273707ea5b8023ac77d31756ed4",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851707ea5b8023ac77d31756ed4",
                "width": 64
            }
        ]
    },
    {
        "id": "6qCNaRRr5xJALfNJvh0NAw",
        "name": "Bom Diggy Diggy",
        "artists": [
            "Zack Knight",
            "Jasmin Walia"
        ],
        "external_url": "https://open.spotify.com/track/6qCNaRRr5xJALfNJvh0NAw",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27382f0b09ca518a1563175ed85",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0282f0b09ca518a1563175ed85",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485182f0b09ca518a1563175ed85",
                "width": 64
            }
        ]
    },
    {
        "id": "3fPgIknlkDWXs1l2noKZbp",
        "name": "Kar Gayi Chull",
        "artists": [
            "Badshah",
            "Amaal Mallik",
            "Fazilpuria",
            "Sukriti Kakar",
            "Neha Kakkar"
        ],
        "external_url": "https://open.spotify.com/track/3fPgIknlkDWXs1l2noKZbp",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27310c94c7cd311738c527ae46f",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0210c94c7cd311738c527ae46f",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485110c94c7cd311738c527ae46f",
                "width": 64
            }
        ]
    },
    {
        "id": "5sqPE9h98DkO5ms20NUiUg",
        "name": "Tamma Tamma Again",
        "artists": [
            "Bappi Lahiri",
            "Anuradha Paudwal",
            "Badshah"
        ],
        "external_url": "https://open.spotify.com/track/5sqPE9h98DkO5ms20NUiUg",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fa3617fcd0dd0f23e7174219",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fa3617fcd0dd0f23e7174219",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fa3617fcd0dd0f23e7174219",
                "width": 64
            }
        ]
    },
    {
        "id": "0rUN8ascPVT9iiLzC5ocPw",
        "name": "Abhi Toh Party Shuru Hui Hai",
        "artists": [
            "Badshah",
            "Aastha Gill"
        ],
        "external_url": "https://open.spotify.com/track/0rUN8ascPVT9iiLzC5ocPw",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733b37f6de72015eefce8ee5d3",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e023b37f6de72015eefce8ee5d3",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048513b37f6de72015eefce8ee5d3",
                "width": 64
            }
        ]
    },
    {
        "id": "3BhjbaGeI7E0CiIjctfdD3",
        "name": "Kar Gayi Chull",
        "artists": [
            "Badshah",
            "Amaal Mallik",
            "Fazilpuria",
            "Sukriti Kakar",
            "Neha Kakkar"
        ],
        "external_url": "https://open.spotify.com/track/3BhjbaGeI7E0CiIjctfdD3",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273739d47018b9361084a51663e",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02739d47018b9361084a51663e",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851739d47018b9361084a51663e",
                "width": 64
            }
        ]
    },
    {
        "id": "6zojSFiUNySBy3Kd1JVCXb",
        "name": "Dil Chori",
        "artists": [
            "Yo Yo Honey Singh",
            "Simar Kaur",
            "Ishers"
        ],
        "external_url": "https://open.spotify.com/track/6zojSFiUNySBy3Kd1JVCXb",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27322927ab54277255e23fc4756",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0222927ab54277255e23fc4756",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485122927ab54277255e23fc4756",
                "width": 64
            }
        ]
    },
    {
        "id": "7q7eYVerltlW2sYBuga6Mj",
        "name": "High Heels",
        "artists": [
            "Jaz Dhami",
            "Yo Yo Honey Singh"
        ],
        "external_url": "https://open.spotify.com/track/7q7eYVerltlW2sYBuga6Mj",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ad4dde97609dfae7eb37026f",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ad4dde97609dfae7eb37026f",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ad4dde97609dfae7eb37026f",
                "width": 64
            }
        ]
    }
])

  const [prompt, setPrompt] = useState('')
  const [num, setNum] = useState(10)

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

  return (
    <div className="App">
      <h1>Spotify GPT</h1>

      {loading && <LoadingScreen loadingText="Please wait..." />}

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
          <option value="10">10</option>
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
