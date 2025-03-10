import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import { generateRandom, getMessages } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
           dispatch(addChat({name:generateRandom(), text:getMessages(30),

           }));
        },1000);
        return ()=>{
            clearInterval(i);
        };
    },[]);
  return (
    <>
    <div>
    <div className='ml-2  flex flex-col-reverse overflow-hidden overflow-y-scroll border border-black  rounded-lg p-2
     bg-slate-300 max-w-[1060px] h-[500px] lg:h-[750px] '>
      
      {chatMessages.map((c,index)=><ChatMessage  name={c.name} text={c.text}/>) }
       
      
      
    </div>
    <form className='mx-2 border border-black  h-[60px] sm:max-w-[1060px] max-w-[750px]' 
    onSubmit={(e)=>{e.preventDefault();
      dispatch(addChat({
        name:"akshay",
        text:liveMessage,
      }))
      setLiveMessage("");

    }}>
       <input type='text' className='p-2 max-w-[700px] h-[40px] m-2 border  border-black '  value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value);}}/>
       <button className='bg-green-200 p-2 rounded-lg ml-16'>send</button>
       </form>
    </div>
    </>
  )
}

export default LiveChat
