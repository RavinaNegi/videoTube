import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchContainer = () => {
  const [searchParams]=useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <div className='max-w-screen'>
      <div className=' flex flex-col lg:flex-row  w-screen'>
    <div className=' shrink px-5 relative lg:w-[73vw]  md:h-[800px] aspect-video'>
        <iframe className='w-full h-full'  src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="นะหน้าทอง - โจอี้ ภูวศิษฐ์  (JOEY PHUWASIT)「Official MV」" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
    </div>
    <div className='shrink maxw-[100px] ' >
      <LiveChat/>
    </div>
    
    </div>
    <div className='m-4'>
      <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchContainer;
