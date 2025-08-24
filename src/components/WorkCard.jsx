import React from "react";

export const WorkCard = ({image, title, linkTo }) => {
    return (
        <div onClick={linkTo} className="
        h-96 lg:h-112 w-96 lg:w-128 
        border-2 border-[var(--accent-purple)]/20 
        shadow-[0_70px_70px_0_var(--accent-purple)]/0
        hover:shadow-[0_20px_40px_0_var(--accent-purple)]/60
        rounded-md relative 
        transition-shadow duration-800 ease-in-out
        cursor-pointer select-none
        ">
            <img src={image} className="h-56 w-86 object-cover rounded-md absolute top-8/20 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

            <h2 className="w-74 lg:w-96 text-[var(--accent-purple)]/20 capitalize font-extrabold text-6xl tracking-wide absolute top-18/20 left-8/20 -translate-x-1/2 -translate-y-1/2 text-start
            ">
                {title}
            </h2>

            
        </div>
    )
}

