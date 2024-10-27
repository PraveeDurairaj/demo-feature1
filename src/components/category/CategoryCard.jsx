import React from 'react'

const CategoryCard = ({data}) => {
    return (
        <div className=" group rounded-[20px] min-h-[300px]  p-2 flex items-end !bg-center  !bg-cover " style={{background:`url(${data?.imageUrl})`}}>
            <div className="bg-white sm:backdrop-blur-[12px] sm:bg-white/30 rounded-[10px]  p-2 text-black w-full sm: group-hover:bg-white">
                <h6 className="text-[18px]">{data?.title} </h6>
                <p className="text-[12px]">{data?.description}</p>
            </div>
        </div>
    )
}

export default CategoryCard
