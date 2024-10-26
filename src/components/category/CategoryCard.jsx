import React from 'react'

const CategoryCard = ({data}) => {
    return (
        <div className="rounded-[20px] min-h-[300px]  p-2 flex items-end  !bg-cover " style={{background:`url(${data?.imageUrl})`}}>
            <div className="backdrop-blur-[12px] bg-white/30 rounded-[10px]  p-2 text-black w-full hover:bg-white">
                <h6 className="text-[18px]">{data?.title} </h6>
                <p className="text-[12px]">{data?.description}</p>
            </div>
        </div>
    )
}

export default CategoryCard
