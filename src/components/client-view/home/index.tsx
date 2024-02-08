"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientSectionDataTypes } from "@/types";
import AnimationWrapper from "../animate-wrapper";
import profile from "../../../../public/profile.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ClientHome({ data } : { data: ClientSectionDataTypes}) {
    return (
        <AnimationWrapper>
            <div className="min-h-dvh p-8 flex justify-between items-center" id="home">
                <motion.div className="w-1/2">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                        {data.data[0].mainText
                            .split(" ")
                            .map((word, index) => (
                                <span 
                                    key={index} 
                                    className={`${
                                        index === 1
                                            ? "text-7xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
                                            : "text-white" 
                                    }`}
                                >
                                    {word}{" "}
                                </span>
                            ))
                        }
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl">{data.data[0].description}</p>
                    <motion.div animate={{ scale: 2}} className="flex justify-around w-20">
                        <Link href="https://github.com/pedroalima">
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/pedroalima6/">
                            <FaLinkedinIn />
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div className="w-1/2 flex justify-center">
                    <Image src={profile} width={500} alt="Image profile" />
                </motion.div>
            </div>
        </AnimationWrapper>
    );
}