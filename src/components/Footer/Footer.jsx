import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Footer = ({ staticContent }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
            {
                staticContent?.map((data) => {
                    return (
                        <div key={data?.id}>
                            <h6 className='text-[18px] font-[600] mb-[15px]'>{data?.fTitle}</h6>
                            {
                                data?.fDescription?.map((item) => {
                                    return (
                                        <>
                                            {item?.text && <p key={item?.id} className='mb-[15px] flex gap-2 items-center justify-start cursor-pointer hover:text-[#f42c37]'>{item?.icon && <Image src={item?.icon} alt='footerIcon' className='w-[15px] h-[15px]'></Image>}{item?.text} </p>}
                                            {item?.buttonText && <Button text={item?.buttonText} />}
                                            {item?.iconList && <div className='flex gap-4'>
                                                {item?.iconList?.map((icon)=>{
                                                    return(
                                                        <Image src={icon} className='w-[30px] h-[30px]'></Image>
                                                    )
                                                })}
                                            </div>}
                                        </>

                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Footer
