import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SearchAPI } from '../utils/constant';
import { cache } from 'react';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [suggestion,setSuggestion]=useState([]);
  const [search,setSearch]=useState("");
  const [showSuggestion,setShowSuggestion]=useState(false);
  const [inputValue,setInputValue]=useState("");
  const showTheSearch=(e)=>{
    setSearch(e.target.value);
   
  }
  const searchCatche=useSelector((store)=>(store.search));
  useEffect(()=>{
    const time=setTimeout(()=>{
      if(searchCatche[search]) {setSuggestion(searchCatche[search]);}
      else{
      fetchTheSearchAPI()} },400);
    return ()=>{
      clearTimeout(time);
    };
               },[search]);
  const fetchTheSearchAPI=async ()=>{
    const data=await fetch(SearchAPI+search);
    const json=await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [search]:json[1],
    }));
    }


  const dispatch=useDispatch();
  const togglerHandler=()=>{
    dispatch(toggleMenu());


  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg w-[100vw] h-40 ' >
        <div className='flex col-span-1 cursor-pointer' onClick={togglerHandler}>
            <img alt='icon'  className='h-11 my-14 bg-gray-500' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEX///8AAADy8vKioqL5+fkrKyt0dHTQ0NDT09M2Nja5ubnr6+upqamVlZVSUlLc3Nzi4uLExMRfX19FRUVsbGw+Pj5lZWWNjY2CgoJ6enoLCwsXFxdPKYE2AAACRklEQVR4nO3dC46jMAyAYRa6hVLenc6Uzv3vuaBqZh9STCyt5MT6vxPYSiAhGFMUAAAAAAAAAAAAuTqVSTspUrk2/XL5mazL0jfX2FTa24/k3dqodOo360DjvNXHucwX6yhjXWY/uRxnMy3WEWosk5hMZR2fTiXl0tytw9O5N0IyrXV0Wm04l+vZOjitc3i1GTObZds8G8OXjHVseuGLprYOTS+8DXCVTPNpHZvWZ3iaTYN1cFpDeA9QflgHp9WXwWRcLZrF9G4dnc67uNPMbGikgSmKU1ZXzcfBwcaU0fbsLD/O7Nk8rGOM9TjMZbs/d1lsN++dcFf+Q10lv3gOVcTZzMtpqtuuSlbX1pPmTHNLKGGqRAAAAAAAAID/J+m6RtXBWTnO/XpO1trPY9xB8zYo8/q0Pks+8lznqOEZe+tI4/ThSpNvdTblc8vhi4Am+bcZvw1StdnmulpHqLHK5cCddXw6nZTLmNEk2w3STSCzMgCxEKDM5k3zl0d48Zwy+Ajgb7fw6/Mm+ZX/X0/KGlMllDV6mmaubgCubs2uFk1f2xlXG01fjwCuHs58PTb7OtDwddRUuDoEfA2P9RGshLpGAAAAAAAAWLH+5FeiS8TRh9qOPqH31NzAU9sJTw1BXLVqyawQQGyi46q9UWYDI5c1ZnXF7ISWYK6atblqo+eqEtBVMq6agrpq1+qqka6rRdNX82lXbcGLMZvSud1yUHLmqZV+Ttkc5+Lr9xO+fgxSuPplyy7pqkbqGgEAAAAAAAAAQM5+AbaoXAOXviXAAAAAAElFTkSuQmCC'/>
            
            <img alt='youtube-logo' className='w-44 h-24 ml-10 mt-10 '  src='data:image/png;base64,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'/>
       
        </div>
       
        <div className='col-span-10 hidden md:block '>
          <div>
            <input  className=" rounded-l-full w-1/2 mt-14 border p-4 border-black"  type='text' placeholder='search' 
            onChange={showTheSearch}
            onBlur={()=>setShowSuggestion(false)}
             onFocus={()=>setShowSuggestion(true)}></input>
            <button className='border border-black h-14 w-16  mt-14 rounded-r-full bg-gray-300'>🔍</button>
           
            </div>
            {showSuggestion && (<div  className='z-10 absolute rounded-full  bg-white-400 w-40'>
              <ul>
              {suggestion.map((c)=> <li onClick={(e)=>{setInputValue(e.target.value)}} className='shadow-lg  hover:bg-slate-400 bg-white p-3  border-gray-100'>{c}</li>)}
            </ul>
            
            </div>)}
            
            </div>
           
        <div className='col-span-1'>
            <img alt='user-icon' className='w-20 rounded-3xl my-10 mr-0' src='data:image/png;base64,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'/>
        </div>

    </div>
  )
}

export default Head;
