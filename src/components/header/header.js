import React from 'react';
import './header.css';
import { TextField, createTheme, ThemeProvider } from '@mui/material';
// import { ThemeProvider } from '@mui/private-theming';

const header = ({word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#fff"

            },
          mode: 'dark',
        },
      });
    return (
        <div className="header">
            <span className="title">Word <span style={{color: "#FFD369"}}>Hunt</span></span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>
                <TextField fullWidth size= "normal"  className="search" label="Enter word" variant="standard" value={word} onChange={(e)=>{
                    setWord(e.target.value)
                }}/>

                </ThemeProvider>
           
            </div>
        </div>
    )
}

export default header
