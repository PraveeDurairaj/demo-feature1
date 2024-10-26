import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const ProductCard = ({data}) => {
   
    return (
        <div className='max-w-[260px] mx-auto'>
            <div className='group hover: cursor-pointer rounded-[20px] relative w-full min-h-[200px] '>
                <Image alt='productImage' className='w-full  h-full rounded-[10px] absolute inset-0 z-10' src={data?.ProductImage}></Image>
                <div className=' group-hover:z-50 w-full h-full  rounded-[10px] absolute backdrop-blur-[4px]  bg-white/30   ' >
                    <p className='flex justify-center items-center w-full h-full' >
                      <Button text={"Add to cart"}/>
                    </p>
                </div>
            </div>
            <p className='text-[15px] mt-[5px] font-[600]'>{data?.productName}</p>
            <p className='text-[16px] font-[600] mt-[5px]'>{data?.price}</p>
        </div>
    )
}

export default ProductCard