import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className=' whitespace-nowrap bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 mx-1 mt-3 rounded-full'>{item}</button>
      
    </div>
  )
}

export default Button
