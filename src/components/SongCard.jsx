import React from 'react';

const SongCard = (props) => {
    const { name, artists, img, onRemove } = props

    return (
        <div className='songCard_container'>
            <img className='songCard_img' src={img} alt='song' />
            <div>
                <h2 className='songName'>{name}</h2>
                <p>{artists.map((artist, id) => <span key={id}>{artist}</span>)}</p>
            </div>
            <button className='songCard_btn' onClick={onRemove}>Remove</button>
        </div>
    );
};

export default SongCard;