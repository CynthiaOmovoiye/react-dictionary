import React, { useRef } from 'react';


const Audio = (source) => {
    const audioRef = useRef()
    const audio = <audio controls id="beep"  ref={audioRef} >
    <source src={source.source} type="audio/mp3"/>
    Your browser does not support the audio tag.
</audio>
if(audioRef.current){
    audioRef.current.load();
}
    return (
       audio
        
    )
}

export default Audio
