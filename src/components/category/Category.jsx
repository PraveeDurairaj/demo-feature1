import React from "react";
import CategoryCard from "./CategoryCard";


const Category = ({ containerClass, staticContent }) => {
  return (
    <>
      <div className={`grid gap-[25px] sm: grid-cols-1 ${containerClass ? 'lg:grid-cols-[1fr_1fr_2fr]' : 'lg:grid-cols-[2fr_1fr_1fr]'}`}>
        {
          staticContent?.map((item) => {
            return (
              <div key={item?.id}>
                <CategoryCard data={item} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Category
