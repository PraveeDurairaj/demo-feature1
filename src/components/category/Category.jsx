import React from "react";
import CategoryCard from "./CategoryCard";


const Category = ({ staticContent }) => {
  return (
    <div id="Category">
      <h2 className='text-[40px] font-[700] text-center '>Look Of Products</h2>
      <p className='text-[14px] text-gray-400 mb-[50px] text-center'>Enhance Your Look</p>

      {
        staticContent?.map((data) => {
          return (
            <div key={data?.id} className={`grid gap-[25px] mb-[25px] sm: grid-cols-1 ${data?.containerClass ? 'lg:grid-cols-[1fr_1fr_2fr]' : 'lg:grid-cols-[2fr_1fr_1fr]'}`}>
              {
                data?.categoryCardData?.map((item) => {
                  return (
                    <div key={item?.id} data-aos='fade-up' >
                      <CategoryCard data={item} />
                    </div>
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

export default Category
