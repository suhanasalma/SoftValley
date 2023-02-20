import React from 'react';

const Button = ({text,classes,handleClick}) => {
 
   return <div onClick={handleClick} className={`w-40 cursor-pointer ${classes} text-center p-2 rounded-md `}>{text}</div>;
};

export default Button;