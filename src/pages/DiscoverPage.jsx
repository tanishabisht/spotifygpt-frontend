import React, { useRef, useState } from 'react';
import { PromptMessage, CustomSelect } from '../components'
import Logo from '../public/logo.png'
import { useAutosizeTextArea } from "../hooks";


const DiscoverPage = () => {

    const [search, setSearch] = useState("");
    const searchAreaRef = useRef(null);

    useAutosizeTextArea(searchAreaRef.current, search);

    const handleTextAreaChange = (e) => {
        const val = e.target?.value;
        setSearch(val);
    };

    return (
        <div className='discover_container'>
            <div></div>

            <div className='tagline_container'>
                <img className='tagline_logo' src={Logo} alt='logo' />
                <h2 className='tagline_text'>Let's create a Playlist</h2>
            </div>

            <div>
                <div className='suggestions_container'>
                    <PromptMessage>Create a playlist for a cozy night in with a mix of acoustic and jazz tracks</PromptMessage>
                    <PromptMessage>Suggest a high-energy workout playlist with a combination of pop and electronic dance music</PromptMessage>
                    <PromptMessage>Curate a calming instrumental playlist for focused work or study sessions</PromptMessage>
                    <PromptMessage>Build a road trip playlist with a diverse selection of classic rock, indie, and feel-good tunes</PromptMessage>
                </div>

                <div className='form_container'>
                    <textarea
                        className='form_input_text'
                        onChange={handleTextAreaChange}
                        placeholder="&#xe8b6; Describe the occasion or vibe you're looking for..."
                        ref={searchAreaRef}
                        rows={1}
                        value={search}
                    />
                    <div className='second_line_form'>
                        <CustomSelect options={['2', '20', '30']} />
                        <button className='form_input_btn' type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;