import React, { useState } from 'react';
import { useEffect } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCArd, { AdCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>
    {
        getVideo();
    },[]);
    const getVideo=async ()=>
    {
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json=await data.json();
        
        setVideos(json.items);
        
    }
  return (
    <div className='flex flex-wrap relative shrink mx-6  w-[90vw]'>
     
     
      {videos && videos.map((video)=>{
        return <Link  key={video.id}  to={"/watch?v="+video.id}><VideoCArd info={video}/></Link>})}
    </div>
  )
}

export default VideoContainer;
