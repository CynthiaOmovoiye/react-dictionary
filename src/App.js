
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {

  const dictionaryFunction = async ()=>{
    
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
console.log(data)
    }
    catch(error){
      console.log(error)

    }

  }
  useEffect(()=>{
    dictionaryFunction()
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
