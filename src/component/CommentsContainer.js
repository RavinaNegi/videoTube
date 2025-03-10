import React from 'react';
const commentsData=[{
    name:"raj",
    Comment:"loremt flakgflalf",
    reply:[{
        name:"raj",
        Comment:"loremt flakgflalf",
        reply:[{
            name:"raj",
            Comment:"loremt flakgflalf",
            reply:[{
                name:"raj",
                Comment:"loremt flakgflalf",
                reply:[{
                    name:"raj",
                    Comment:"loremt flakgflalf",
                    reply:[]
                }]
            },]
        }]
    },
    {
        name:"raj",
        Comment:"loremt flakgflalf",
        reply:[]
    }]
},{
    name:"raj",
    Comment:"loremt flakgflalf",
    reply:[{
        name:"raj",
        Comment:"loremt flakgflalf",
        reply:[]
    }]
},
{
    name:"raj",
    Comment:"loremt flakgflalf",
    reply:[{
        name:"raj",
        Comment:"loremt flakgflalf",
        reply:[{
            name:"raj",
            Comment:"loremt flakgflalf",
            reply:[]
        }]
    }]
},
{
    name:"raj",
    Comment:"loremt flakgflalf",
    reply:[]
}];
const Comment=({data})=>{
    const {name,Comment,reply}=data;
    return (
        <div className=' bg-gray-300 shadow-lg m-4 p-2 flex'>
            <img className="h-10 " src='data:image/png;base64,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' alt='perso'/>
            <div className='mx-4'>
                <p className='font-bold'>{name}</p>
                <p>{Comment}</p>
            </div>
            
        </div>
    )
};
const CommentList=({comments})=>{
    return (
        
        comments.map((c,index)=>(<div><Comment data={c} />
        <div className='ml-5 border border-l-black '>
        <CommentList comments={c.reply} />
        
        </div>
        </div>))
        
        
        
    )
};
    


const CommentsContainer = () => {
  return (
    <div className='m-4 rounded-lg'>
        <h1 className=' font-bold text-2xl '>Comment:</h1>
        <CommentList comments={commentsData} />
        
      
    </div>
  )
}

export default CommentsContainer;
