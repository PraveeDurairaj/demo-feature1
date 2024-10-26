import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const OurProduct = ({ staticContent }) => {
    return (
        <>
        <h2 className='text-[30px] font-[700] text-center mb-[50px]'>Our Products</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4' >
            {
                staticContent?.map((item) => {
                    return (
                        <div key={item?.id}>
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
