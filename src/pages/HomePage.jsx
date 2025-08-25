import React from "react";
import { Menu } from "../components/menu";
import { WorkGallery } from "../components/WorkGallery";
import { Footer } from "../components/Footer";

export const HomePage = () => {
    return(
        <div className="w-screen">

        <div className="h-screen w-screen bg-[var(--background-color)]">

            <Menu
            option1="contact"
            option1Link="mailto:someone@example.co"
            option2="Work"
            option2Link="#workSection"
            ></Menu>

            <div className="h-full flex flex-col justify-center items-center -mt-5">
            <h1 className="
            text-[var(--accent-purple)] text-5xl select-none
             gothic-regular border-2
             rounded-full
             p-3 mb-7 transition-transform duration-700 ease-in-out
             hover:rotate-180
             ">
                ∀
            </h1>

            <h3 className="text-white text-4xl capitalize italiana-regular mb-3">aurora toscano</h3>
            <h2 className="text-white capitalize font-light text-md tracking-widest">social media manager & head of content</h2>
            </div>

        </div>

        <div className="w-screen pt-16 pb-20 md:pb-52" id="workSection">
        <WorkGallery></WorkGallery>
        </div>

        </div>
    );
}