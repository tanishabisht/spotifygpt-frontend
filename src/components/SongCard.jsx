import React from 'react';

const SongCard = (props) => {
    const { name, artists, img, onRemove } = props

    return (
        <div className='song_card_container'>
            <div className='song_card_left'>
                <img className='song_img' src={img} alt='song' />
                <div>
                    <h2 className='song_name'>{name}</h2>
                    <p>{artists.map((artist, id) => <span key={id} className='song_artist'>{artist} . </span>)}</p>
                </div>
            </div>
            <button className='song_btn' onClick={onRemove}>Remove</button>
        </div>
    );
};

export default SongCard;