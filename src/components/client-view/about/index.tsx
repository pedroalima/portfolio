"use client";
import { ClientSectionDataTypes } from "@/types";
import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimationWrapper from "../animate-wrapper";

export default function ClientAbout({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    function variants() {
        return {
            offscreen: {
                x: 200,
                opacity: 0,
            },
            onscreen: ({ duration = 1.5 } = {}) => ({
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration,
                },
            }),
        };
    }

    const setVariants = useMemo(() => variants(), []);

    return (
        <div className="w-full py-40 overflow-hidden" id="about">
            <AnimationWrapper>
                {data.data.map((item, i) => (
                    <motion.div 
                        key={i} 
                        className="flex justify-evenly"
                        variants={setVariants}
                    >
                        <div>
                            <h2 className="text-7xl font-semibold text-cyan-400">+{item.projects}</h2>
                            <span className="text-2xl font-normal text-gray-500">Projetos</span>
                        </div>
                        <div className="border-r-4 border-cyan-400"></div>
                        <div>
                            <h2 className="text-7xl font-semibold text-cyan-400">+{item.experience}</h2>
                            <span className="text-2xl font-normal text-gray-500">Expericência</span>
                        </div>
                    </motion.div>
                ))}
            </AnimationWrapper>
        </div>
    );
}