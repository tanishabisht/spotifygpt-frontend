import React from 'react';

const PlaylistCard = (props) => {
    const { name, img, onClick, link } = props

    return (
        <div className='playlistCard_container'>
            <img className='playlistCard_img' src={img} alt='song' />
            <div>
                <div>
                    <p>Playlist</p>
                    <h2 className='playlistName'>{name}</h2>
                </div>
                <p>{localStorage.getItem('name')}</p>
            </div>
            <span onClick={() => console.log(link)}>PLAY</span>
        </div>
    );
};

export default PlaylistCard;