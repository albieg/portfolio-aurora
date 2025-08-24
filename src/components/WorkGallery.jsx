import React from "react";
import { WorkCard } from "./WorkCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const WorkGallery = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center">
        <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="h-full bg-[var(--background-color)] flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-18 pb-5">
            <WorkCard
            image="/src/assets/RihsmybihPage.JPEG"
            title="Rihsmybih"
            linkTo={() => navigate("/rihsmybih")}
           />
           <WorkCard
            image="/src/assets/DrakePage.JPEG"
            title="Drake"
            linkTo={() => navigate("/drake")}
           />
        </div>
        </motion.div>
        </div>
    )
}