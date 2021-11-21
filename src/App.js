/* eslint-disable react-hooks/exhaustive-deps */

import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import './App.css';
import Definitions from './components/definitions/definitions';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');

  const dictionaryFunction = async ()=>{
    
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      setMeanings(data.data)

    }
    catch(error){
      setMeanings([])

    }

  }
  useEffect(()=>{
    dictionaryFunction()
  }, [word])

  return (
    <div className="App" style={{height: '100vh', backgroundColor: "#222831", color:"white" }}>
      <Container maxWidth="md" style={{display: "flex", height:"100vh", flexDirection: "column"}}>
      <Header word={word} setWord={setWord}/>
      {meanings.length && word ? (<Definitions meanings = {meanings} word={word}/>)
      :!meanings.length && word ? (
        <span className ="subTitle">No definitions available</span>
      )
      : ( <span className ="subTitle">Type a word in the search field</span>)}
      </Container>
    </div>
  );
}

export default App;
