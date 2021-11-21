import { Button } from '@mui/material';

import './definitions.css';
import React, { useRef } from 'react';
import Audio from '../audio/audio'

const definitions = ({word, meanings, setWord}) => {
    return (
        <div className="meanings">
         {meanings.map((mean,index)=>(
               <div className="mean">
                   <div className="padded top">
                   <p className="wordText">{mean.word}<sup>{index+1}</sup></p>
                   <div className="phonetics" style={{}}>

                   {mean.phonetic ? <span style={{marginRight: "5px"}}>{`${'/'}${mean.phonetic} ${'/'}`}</span>: "" }
                   {mean.phonetics[0].audio && (<Audio source = {mean.phonetics[0].audio}/>
                    )}
                   </div>
                  
                   <p>{mean.origin}</p>
                   <hr/>
                   </div>
                   
                   
                   <div className ="meaning padded">
                  {mean.meanings.map((meaning)=>(
                      <div className="">
                          <p className="partofspeech">{meaning.partOfSpeech}</p>
                          {meaning.definitions.map((definition)=>(
                              <div className="definitions">
                                   <p className="defn">{definition.definition}</p>
                                   {definition.example && (
                                       <div className = "example">
                                           <p className="subText">Example:</p>
                                       <span>{`${definition.example}`}</span>
                                       </div>
                                       
                                       
                                       )}
                                   
                                   {definition.synonyms.length>0 && (
                                       <div className = "synonym">
                                           <p className="subText">Synonyms:</p>
                                           {definition.synonyms.map((synonym)=>(
                                               <Button 
                                               value = {synonym}
                                               style={{borderRadius:"10px", margin: "2px"}}
                                                onClick={(e) => {
                                                setWord(e.target.value)
                                              }} variant="outlined">
                                                  {synonym}
                                                  </Button>
                                               ))}
                                       </div>
                                       
                                       
                                       )}
                                       {definition.antonyms.length>0 && (
                                       <div className = "antonym">
                                           <p className="subText">Antonyms:</p>
                                           {definition.antonyms.map((antonym)=>(
                                       <Button 
                                       value = {antonym}
                                       style={{borderRadius:"10px", margin: "2px"}}
                                        onClick={(e) => {
                                        setWord(e.target.value)
                                      }} variant="outlined">
                                          {antonym}
                                          </Button>))}
                                       </div>
                                       
                                       
                                       )}

                              </div>
                             
                          ))}

                      </div>

                  ))}
                  </div>
               </div>
           ))}
        </div>
    )
}

export default definitions
