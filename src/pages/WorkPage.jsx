import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const WorkPage = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen bg-[var(--background-color)] flex flex-col px-16 lg:px-72 pt-16">
            <button onClick={() => navigate(-1)} className="flex justify-start pb-10">
                <img src="src/assets/cross.svg" className="size-10 transition-transform duration-600 ease-in-out hover:rotate-180 cursor-pointer"/>
            </button>

            <p className="text-white/80 font-light text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="w-full flex justify-center items-center py-16">
                <img src="/src/assets/rihsmybihStats.png" className="h-56 w-228 object-cover rounded-md"></img>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-white/80 font-light text-justify pb-6">Followed by Rihanna • June 4th 2023</h2>
                <img src="/src/assets/rihannaFollow.jpg" className="h-18 w-128 object-cover rounded-md"></img>
            </div>

            
        </div>
    )
}