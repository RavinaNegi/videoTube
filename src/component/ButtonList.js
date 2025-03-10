import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All", "Music", "Movies", "CSS", "JavaScript", "Travel", "Education", 
    "React", "Sports", "News", "College", "Comedy", "New to You", 
    "Data Structure", "Recently Uploaded"
  ];

  return (
    <div className="max-w-full overflow-x-auto scrollbar-hide whitespace-nowrap flex space-x-3 px-2 py-2 bg-white">
      {list.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
};

export default ButtonList;
