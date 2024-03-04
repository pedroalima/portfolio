"use client";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animate-wrapper";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ClientSectionDataTypes } from "@/types";

export default function ClientHome({ data } : { data : ClientSectionDataTypes}) {
    
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
        <AnimationWrapper className="flex justify-between items-center">
            <motion.div 
                className=""
                variants={setVariants}
            >
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900">
                    {data.data[0].mainText
                        .split(" ")
                        .map((word, index) => (
                            <span 
                                key={index} 
                                className={`${
                                    index === 1
                                        ? "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-cyan-400"
                                        : "text-white" 
                                }`}
                            >
                                {word}{" "}
                            </span>
                        ))
                    }
                </h1>
                <p className="text-base font-normal text-gray-500">{data.data[0].description}</p>
                <div className="flex justify-around w-60 mt-16 ml-16">
                    <motion.div  animate={{ scale: 1.5}} whileHover={{ scale: 2 }}>
                        <Link href="https://github.com/pedroalima">
                            <FaGithub color="rgba(34, 211, 238, 1)" className="w-6 h-6" />
                        </Link>
                    </motion.div>
                    <motion.div  animate={{ scale: 1.5}} whileHover={{ scale: 2 }}>
                        <Link href="https://www.linkedin.com/in/pedroalima6/">
                            <FaLinkedinIn color="rgba(34, 211, 238, 1)" className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </AnimationWrapper>
    );
}