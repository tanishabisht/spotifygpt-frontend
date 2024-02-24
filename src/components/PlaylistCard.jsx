import React from 'react';

const PlaylistCard = (props) => {
    const { name, img, link } = props

    const onPlay = () => {
        console.log('link', link)
    }

    return (
        <div className='playlist_card_container'>
            <img className='playlist_img' src={img} alt='playlist' />
            <div className='playlist_info'>
                <div>
                    <p className='playlist_header'>Playlist</p>
                    <h1 className='playlist_name'>{name}</h1>
                </div>
                <p className='playlist_user'>{localStorage.getItem('name')}</p>
            </div>
            <div onClick={onPlay} className='playlist_card_overlay'>
                <div className='play_button'>▶</div>
            </div>
        </div>
    );
};

export default PlaylistCard;