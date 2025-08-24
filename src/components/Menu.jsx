import React from "react";

export const Menu = ({option1, option1Link, option2, option2Link}) => {
    return (
        <div className="bg-[var(--background-color)] text-white text-sm capitalize flex justify-between pt-6 px-8 select-none">
            <a href={option1Link}><h4 className="hover:text-[var(--accent-purple)] cursor-pointer transition delay-100 duration-150 ease-in-out">{option1}</h4></a>
            <a href={option2Link}><h4 className="hover:text-[var(--accent-purple)] cursor-pointer transition delay-100 duration-150 ease-in-out">{option2}</h4></a>
        </div>
    )
}