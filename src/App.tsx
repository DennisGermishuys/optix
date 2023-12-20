import './App.css'
import axios from 'axios';
import {ChangeEvent, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "../Pages/Users/users.tsx";
import Header from "./components/Header/header.tsx";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Home from "../Pages/Home/home.tsx";
function App() {
    const storageTheme = localStorage.getItem('theme') || null;
    const [toggleDarkMode, setToggleDarkMode] = useState<string>( storageTheme || 'dark');
    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode === 'dark' ? 'dark' : 'light',
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#131052',

            },
        },
    });

    const toggleDarkTheme = () => {
        if (toggleDarkMode === 'dark') {
            setToggleDarkMode('light');
            localStorage.setItem('theme', 'light')
        } else {
            setToggleDarkMode('dark');
            localStorage.setItem('theme', 'dark')
        }
    };

    const handleFileUpload = (event:  ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files) {
            const file = event?.target?.files[0] || null;

            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const url = 'https://mvai.qa.onroadvantage.com/api/analyse?models=DriveAlertAudio&fps=5&orientation=right';

                axios.post(url, formData, {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Header darkMode={toggleDarkMode} toggleDarkMode={toggleDarkTheme} />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path={'upload'} element={<input type={'file'} onChange={handleFileUpload}/>} />
                        <Route path={'users'} element={<Users />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}
export default App;
