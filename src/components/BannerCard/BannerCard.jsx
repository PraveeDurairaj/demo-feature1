import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const BannerCard = ({bannerImage}) => {
 const data =    {
        productDes: "beats solo",
        headingTitle: "Wireless",
        HeadingTitleTwo: "HEADPH"
      }
    return (
            <div className='bg-[#dde0e4] rounded-2xl'>
                <div className='grid  grid-cols-1 min-h-[300px] sm:grid-cols-2 sm:min-h-[400px]  md:min-h-[450px] lg:min-h-[550px] px-[40px]'>
                    <div className='flex  flex-col gap-4 pb-[20px] pt-[50px] sm:pb-[0px] sm:pt-[0] items-center order-2 sm:justify-center sm:items-start sm:gap-4 sm:order-1'>
                        <p className='text-[24px] font-bold leading-[32px] text-[#000000]'>{data?.productDes}</p>
                        <p className='text-[36px] leading-[36px]  sm:text-[45px] font-bold md:text-[50px] md:leading-[50px] lg:leading-[72px] text-[#000000]'>{data?.headingTitle}</p>
                        <p className='text-[48px] leading-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-bold md:leading-[100px] lg:leading-[120px] text-[#ffffff]' >{data?.HeadingTitleTwo}</p>
                        <Button text={'Shop By Category'}/>
                    </div>
                    <div className='order-1 sm:order-2'>
                        <Image src={bannerImage} alt='headPhone' className=' w-[300px] h-[300px] object-contain sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] m-auto'></Image>
                    </div>
                </div>
            </div>
    )
}

export default BannerCard
