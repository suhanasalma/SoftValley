import React from 'react';

const Button = ({text,classes}) => {
   return <div className={`w-40 ${classes} text-center p-2 rounded-md `}>{text}</div>;
};

export default Button;