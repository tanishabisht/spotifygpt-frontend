import React, { useRef, useState } from 'react';
import { PromptMessage, CustomSelect, Loading } from '../components'
import Logo from '../public/logo.png'
import { SUGGESTIONS_URL } from '../utils/constants'
import { useAutosizeTextArea } from "../hooks";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'


const DiscoverPage = () => {

    // states
    const [search, setSearch] = useState("");
    const [num, setNum] = useState(2);
    const [tracks, setTracks] = useState([]);

    // handle state
    const onSearchChange = (e) => setSearch(e.target?.value);
    const onNumberChange = (data) => setNum(data)

    // flags
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // text area height change
    const searchAreaRef = useRef(null);
    useAutosizeTextArea(searchAreaRef.current, search);

    // handle on suggestions click
    const onPromptClick = (promptText) => {
        setSearch(promptText);
        setShowSuggestions(false)
    };

    // handle suggestions api
    const handleGetSuggestionsApi = async () => {
        if (num && search !== '') {
            setIsLoading(true)
            const access_token = localStorage.getItem('access_token')
            console.log(access_token)
            try {
                const data = {
                    user_prompt: search,
                    num_suggestions: num,
                    access_token: access_token
                }
                const response = await axios.post(SUGGESTIONS_URL, data);
                setTracks(response.data.data.tracks)
                console.log(response)
                setIsLoading(false)
                toast('User got suggestions successfully!', { theme: "dark" });
            } catch (error) {
                console.error('Error during handle request', error);
                setIsLoading(false)
                toast.error('Bad Request: User could not get suggestions', { theme: "dark" });
            }
        }
    }

    // // handle suggestions api
    // const hahaha = async () => {
    //     if (num && search !== '') {
    //         const access_token = localStorage.getItem('access_token')
    //         console.log(access_token)
    //         try {
    //             const data = {
    //                 user_prompt: search,
    //                 num_suggestions: num,
    //                 access_token: access_token
    //             }
    //             const response = await axios.post(SUGGESTIONS_URL, data);


    //             // const data = {
    //             //     user_id: user_id,
    //             //     name: 'playlist',
    //             //     track_ids: ["4frLb7nWtsz2ymBE6k2GRP", "7ySUcLPVX7KudhnmNcgY2D", "6mz1fBdKATx6qP4oP1I65G"],
    //             //     access_token: access_token
    //             // }
    //             // console.log(data)
    //             // const response = await axios.post('http://localhost:8000/api/create-playlist', data);
    //             console.log(response)
    //         } catch (error) {
    //             console.error('Error during handle request', error);
    //         }
    //     }
    // }

    return (
        <div className='discover_container'>

            <ToastContainer />
            {isLoading && <Loading />}


            <div></div>

            <div className='tagline_container'>
                <img className='tagline_logo' src={Logo} alt='logo' />
                <h2 className='tagline_text'>Let's create a Playlist</h2>
            </div>

            {!showSuggestions && <div><br /><br /><br /><br /><br /></div>}

            <div>
                {showSuggestions && (
                    <div className='suggestions_container'>
                        <PromptMessage onClick={onPromptClick}>Create a playlist for a cozy night in with a mix of acoustic and jazz tracks</PromptMessage>
                        <PromptMessage onClick={onPromptClick}>Suggest a high-energy workout playlist with a combination of pop and electronic dance music</PromptMessage>
                        <PromptMessage onClick={onPromptClick}>Curate a calming instrumental playlist for focused work or study sessions</PromptMessage>
                        <PromptMessage onClick={onPromptClick}>Build a road trip playlist with a diverse selection of classic rock, indie, and feel-good tunes</PromptMessage>
                    </div>
                )}

                <div className='form_container'>
                    <textarea
                        className='form_input_text'
                        onChange={onSearchChange}
                        placeholder="&#xe8b6; Describe the occasion or vibe you're looking for..."
                        ref={searchAreaRef}
                        rows={1}
                        value={search}
                    />
                    <div className='second_line_form'>
                        <CustomSelect value={num} onChange={onNumberChange} selected={2} options={[2, 10, 20, 30]} />
                        <button disabled={!(num && search !== '')} onClick={handleGetSuggestionsApi} className='form_input_btn' type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;