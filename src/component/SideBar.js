import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='overflow-auto shadow-lg min-w-14 text-xl shrink'>
      <ul className='p-2 m-2 '>
       <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
        
        </ul>
        <hr/>
        <h1 className='font-bold mt-2 p-2'>You➡️</h1>
        <ul className='p-3 m-2'>
          <li>History</li>
          <li>Playlists</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Downloads</li>
        </ul>
        <hr/>
        <h1 className='font-bold mt-2 p-2'>Explore</h1>
        <ul className='p-2 m-3'>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
        
      
    </div>
  )
}

export default SideBar;
