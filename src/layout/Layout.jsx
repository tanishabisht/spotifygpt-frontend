import React, { useState, useEffect } from 'react';
import { LOGIN_URL } from '../utils/constants'
import Logo from '../public/logo.png'
import axios from 'axios'

const Layout = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false)

    const extractCookies = () => {
        const cookiesArr = document.cookie.split('; ');
        const cookiesObj = {};
        cookiesArr.forEach(cookie => {
            const [name, value] = cookie.split('=');
            cookiesObj[name] = value;
        });
        console.log(cookiesObj)

        const name = cookiesObj['name']
        const email = cookiesObj['email']
        const user_id = cookiesObj['user_id']
        const user_account = cookiesObj['user_account']
        const access_token = cookiesObj['access_token']

        if (name !== undefined) localStorage.setItem('name', name)
        if (email !== undefined) localStorage.setItem('email', email)
        if (user_id !== undefined) localStorage.setItem('user_id', user_id)
        if (user_account !== undefined) localStorage.setItem('user_account', user_account)
        if (access_token !== undefined) localStorage.setItem('access_token', access_token)
    }

    const handleLogin = async () => {
        try {
            const response = await axios.get(LOGIN_URL);
            console.log(response)
            window.location.href = response.data.data;
            setIsLogin(true)
        } catch (error) {
            console.error('Error during Spotify login:', error);
        }
    };

    const handleLogout = async () => {
        // Clear cookies
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'user_account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Clear localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_account');
        localStorage.removeItem('access_token');

        // Additional cleanup or redirection logic can be added here
        setIsLogin(false);
    }

    useEffect(() => {
        extractCookies()
        if (localStorage.getItem('access_token')) setIsLogin(true)
    }, [])

    return (
        <>
            <div className='app_container'>
                <div className='app_header'>
                    <img className='app_logo' src={Logo} alt='logo' />
                    <h1 className='app_title'>SpotifyGPT</h1>
                </div>
                <div className='app_user_section'>
                    {isLogin && <>
                        <div className='user_details'>
                            <h3 className='user_name'>{localStorage.getItem('name')}</h3>
                            <p className='user_email'>{localStorage.getItem('email')}</p>
                        </div>
                        <div className='user_initial'>T</div>
                        <button className='logout_btn' onClick={handleLogout}>Logout</button>
                    </>}
                    {!isLogin && <button className='login_btn' onClick={handleLogin}>Login</button>}
                </div>
            </div>
            <div className='app_content'>{children}</div>
        </>
    );
};

export default Layout;
