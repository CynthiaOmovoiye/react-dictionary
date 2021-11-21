import React from 'react';
import './definitions.css'

const definitions = ({word, meanings}) => {
    return (
        <div className="meanings">
         {meanings.map((mean,index)=>(
               <div className="mean">
                   <div className="padded top">
                   <p className="wordText">{mean.word}<sup>{index+1}</sup></p>
                   <div className="phonetics" style={{}}>

                   {mean.phonetic ? <span style={{marginRight: "5px"}}>{`${'/'}${mean.phonetic} ${'/'}`}</span>: "" }
                   {mean.phonetics[0].audio && <audio controls id="beep" >
                        <source src={mean.phonetics[0].audio} type="audio/mp3" />
                        Your browser does not support the audio tag.
                    </audio>}
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
                                       <span>{`${synonym},`}</span>))}
                                       </div>
                                       
                                       
                                       )}
                                       {definition.antonyms.length>0 && (
                                       <div className = "antonym">
                                           <p className="subText">Antonyms:</p>
                                           {definition.antonyms.map((antonym)=>(
                                       <span>{`${antonym}, `}</span>))}
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
