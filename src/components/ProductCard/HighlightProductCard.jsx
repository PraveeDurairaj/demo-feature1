import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';



const HighlightProductCard = ({ staticContent }) => {
  return (
    <div style={{ backgroundColor: `${staticContent?.primary}` }} className={`grid gap-5 p-[10px] grid-cols-1 max-w-[350px]  mx-auto sm:max-w-full  sm:grid-cols-3  text-white sm:p-[30px] rounded-[20px] min-h-[300px] items-center`}>
      <div>
        <p  data-aos='slide-right' className='text-[14px]'>{staticContent?.subText}</p>
        <p data-aos='zoom-in' className='text-[50px] leading-[50px] lg:text-[65px] font-[600] lg:leading-[65px]'>{staticContent?.titleText}</p>
        <p data-aos='slide-right' className='text-[14px]'>{staticContent?.subText2}</p>
      </div>
      <div data-aos='zoom-in'>
        <Image src={staticContent?.image} className='drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] mx-auto w-[300px] sm:w-[200px] md:w-[230px] xl:w-[280px] h-full lg:scale-150' alt='headphone'></Image>
      </div>
      <div>
        <p data-aos='zoom-out' className='text-[18px] font-[600] mb-[15px]'>{staticContent?.subTextBlod}</p>
        <p data-aos='fade-up' className='text-[50px] leading-[50px] lg:text-[65px] font-[600] lg:leading-[65px]'>{staticContent?.titleText2}</p>
        <p data-aos='fade-up' className='text-[14px] mb-[15px] '>{staticContent?.subText3}</p>
        <div data-aos='fade-up' >
        <Button text={staticContent?.buttonText} containerClass={`bg-white`} textClass={staticContent?.primary} /> 
        </div>
       
      </div>

    </div>
  )
}

export default HighlightProductCard
