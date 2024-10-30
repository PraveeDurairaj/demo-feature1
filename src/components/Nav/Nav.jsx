import React, { useState } from 'react';

const Nav = ({ staticContent }) => {
    return (
        <div className='sticky top-0 py-[10px] bg-[#dde0e4] z-[100] rounded-b-[10px] '>
            <div className='bg-black max-w-[300px]  rounded-full flex sm:max-w-[400px] m-auto p-[2px]'>
                {
                    staticContent?.map((data) => {
                        return (
                            <a key={data?.id} className=' text-[14px] sm:text-[16px] text-white py-[5px] px-[10px] rounded-full flex-grow text-center 
                            active:bg-white active:text-black ' href={data?.link} >{data?.text}</a>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Nav
