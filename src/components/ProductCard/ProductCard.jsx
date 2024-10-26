import React from 'react';
import Image from 'next/image';
import productImg from '../../../public/productImage2.jpg'

const ProductCard = () => {

    return (
        <div className='group max-w-[260px]'>
            <div className='rounded-[20px] relative w-full min-h-[200px] '>
                <Image alt='productImage' className='w-full  h-full rounded-[10px] absolute inset-0 z-10' src={productImg}></Image>
                <div className='w-full h-full rounded-[10px] absolute backdrop-blur-[4px]  bg-white/30 z-50  hidden group-hover:block' >
                    <p className='flex justify-center items-center w-full h-full' >text</p>
                </div>
            </div>
            <p className='text-[15px] mt-[5px] font-[600]'>Boat headphone</p>
            <p className='text-[16px] font-[700]'>$20</p>
        </div>
    )
}

export default ProductCard