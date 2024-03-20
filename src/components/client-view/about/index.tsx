"use client";
import { FormDataTypes } from "@/types";
import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimationWrapper from "../animate-wrapper";

export default function ClientAbout({ data } : { data: FormDataTypes[]}) {

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
            value: data[0].projects || "0",
        },
        {
            label: "Experiência",
            value: data[0].experience || "0",
        },
    ];

    return (
        <section className="pt-24 flex flex-col gap-16" id="about">
            <div>
                <p className="text-gray-400 text-wrap">{data[0].about}</p>
            </div>
            <div>
                <AnimationWrapper className="w-full h-full flex justify-evenly items-center">
                    {aboutDataInfo.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={setVariants}
                            custom={{ duration: 1.5 + i}}
                        >
                            <div className="flex w-full mx-auto">
                                <div className="flex flex-col">
                                    <h2 className="text-5xl font-semibold text-cyan-400">+{item.value}</h2>
                                    <span className="text-xl font-normal text-gray-500">{item.label}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimationWrapper>
            </div>
            <div className="w-full flex flex-col justify-evenly items-center">
                <AnimationWrapper>
                    <div className="flex justify-center flex-wrap gap-2">
                        {data[0].skills.split(", ").map((item, i) => (
                            <span key={i} className="px-4 py-2 shadow-md text-base rounded-md container-bg">{item}</span>
                        ))}
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
}