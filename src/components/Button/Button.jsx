import React from 'react';
const Button = ({text}) => {
  return (
    <button className={`px-[32px] py-[8px] bg-[#f42c37] text-white rounded-[50px] text-[14px] hover:scale-1.1`} >
       {text}
    </button>
  )
}

export default Button
