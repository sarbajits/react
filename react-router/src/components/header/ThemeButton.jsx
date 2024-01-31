import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';

function ThemeButton() {
    const { theme, setTheme, themeButton, setThemeButton } = useContext(ThemeContext);

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setThemeButton('light_mode');
        } else {
            setTheme('light');
            setThemeButton('dark_mode');
        }
    };

    useEffect(()=>{
        const body=document.querySelector('html')
        body.classList.remove("light","dark")
        body.classList.add(theme)
    },[theme])

    return (
        <div
            onClick={changeTheme}
            className='bg-slate-400 rounded-full mr-1 p-1 cursor-pointer select-none hover:shadow-xl hover:shadow-black dark:shadow-white hover:bg-cyan-400'>
            <span className="material-symbols-outlined">
                {themeButton}
            </span>
        </div>
    );
}

export default ThemeButton;
