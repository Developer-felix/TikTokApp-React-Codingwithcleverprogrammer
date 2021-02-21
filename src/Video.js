import React,{createRef, useRef, useState} from 'react';
import video from './video.mp4';
import './App.css'

function Video(){
    const [playing, setPlaying] = useState(false);
 
    //const videoRef = useRef(null);
    const videoRef = createRef();
    const onVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
           videoRef.current.play();  
           setPlaying(true) ;
        }
    };
    return(
        <div className="video">
            <video 
            src = {video} 
            ref={videoRef}
            onClick={onVideoPress}
            loop
           className="video__player"
            ></video>
            <h1>Hae from video components</h1>
            {/* <videoFooter />
            <videoSidebar /> */}
        </div>    
    )
}

export default Video;