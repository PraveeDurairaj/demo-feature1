import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const OurProduct = ({ staticContent }) => {
    return (
        <>
        <h2 className='text-[40px] font-[700] text-center '>Our Products</h2>
        <p className='text-[14px] text-gray-400 mb-[50px] text-center'>Explore Our Products</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4' >
            {
                staticContent?.map((item) => {
                    return (
                        <div data-aos="fade-up"
                         data-aos-delay={item.aosDelay}
                         key={item?.id}>
                            <ProductCard data={item} />
                        </div>

                    )
                })
            }
        </div>
        </>
       
    )
}

export default OurProduct
