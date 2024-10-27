import React from 'react';
const Button = ({text,containerClass,textClass}) => {
  return (
    <button style={{color:`${textClass && textClass}`}} className={`px-[32px] py-[8px] bg-[#f42c37] text-white rounded-[50px] text-[14px] ${containerClass && containerClass}`} >
       {text}
    </button>
  )
}

export default Button
