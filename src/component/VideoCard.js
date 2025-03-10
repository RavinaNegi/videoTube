import React from 'react'

const VideoCArd = ({info}) => {
    console.log("this is the thing you want to se in the fyuoth s;ldifgao;sdf",info);
    const {snippet,statistics}=info;
    const {thumbnails,title,channelTitle}=snippet;
      return (
    <div className='shadow-lg m-2 p-2 w-72 rounded-lg h-72'>
        <img className="rounded-lg" alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2 overflow-hidden whitespace-nowrap'>{title}</li>
            <li className='ellipsis-texts'>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
      
    </div>
  )
}

export const AdCard=({info})=>{
  return(
    <div className='border border-red-800 rounded-lg p-2 m-2' >
  <VideoCArd info={info} /> 
  </div>

  )

}
export default VideoCArd;



