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
                y: 150,
                opacity: 0,
            },
            onscreen: ({ duration = 1.5 } = {}) => ({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration,
                },
            }),
        };
    }

    const setVariants = useMemo(() => variants(), []);

    const aboutDataInfo = [
        {
            label: "Projetos",
            value: data.data[0].projects || "0",
        },
        {
            label: "Experiência",
            value: data.data[0].experience || "0",
        },
    ];

    return (
        <div className="w-full py-40 overflow-hidden" id="about">
            <div className="w-full flex">
                <AnimationWrapper className="w-full flex justify-evenly divide-x-2 divide-cyan-400">
                    {aboutDataInfo.map((item, i) => (
                        <motion.div 
                            key={i} 
                            variants={setVariants}
                            custom={{ duration: 1.5 + i}}
                        >
                            <div className="flex w-full mx-auto">
                                <div className="flex flex-col">
                                    <h2 className="text-7xl font-semibold text-cyan-400">+{item.value}</h2>
                                    <span className="text-2xl font-normal text-gray-500">{item.label}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimationWrapper>
            </div>
        </div>
    );
}