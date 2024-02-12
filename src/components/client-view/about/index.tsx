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

    const headingText = "Minhas Habilidades Consolidadas";

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
            <AnimationWrapper className={"mt-20 pt-6"}>
                <motion.div 
                    variants={setVariants} 
                    className="flex flex-col justify-center items-center"
                >
                    <h1 className="leading-[70px] mb-4 text-5xl font-medium">
                        {headingText.split(" ").map((item, index) => (
                            <span key={index} className={`${index === 1 ? "text-cyan-400" : "text-white"}`}>
                                {item}{" "}
                            </span>
                        ))}
                    </h1>
                </motion.div>
            </AnimationWrapper>
            <AnimationWrapper className={"pt-6"}>
                <div className="flex justify-center items-center gap-2">
                    {data.data[0].skills.split(", ").map((item, i) => (
                        <span key={i} className="px-4 py-2 rounded-md border-2 border-cyan-400">{item}</span>
                    ))}
                </div>
            </AnimationWrapper>
        </div>
    );
}