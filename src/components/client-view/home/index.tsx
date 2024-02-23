import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animate-wrapper";
import profile from "../../../../public/profile.png";
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
        <div className="px-12" id="home">
            <AnimationWrapper className="h-screen pt-36 flex justify-between items-center">
                <motion.div 
                    className="w-1/2"
                    variants={setVariants}
                >
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                        {data.data[0].mainText
                            .split(" ")
                            .map((word, index) => (
                                <span 
                                    key={index} 
                                    className={`${
                                        index === 1
                                            ? "text-7xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-cyan-400"
                                            : "text-white" 
                                    }`}
                                >
                                    {word}{" "}
                                </span>
                            ))
                        }
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl">{data.data[0].description}</p>
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

                <motion.div className="w-1/2 flex justify-center">
                    <Image src={profile} width={500} alt="Image profile" />
                </motion.div>
            </AnimationWrapper>
        </div>
    );
}

// export async function getStaticProps() {
//     // Fetch data asynchronously
//     const homeSectionData = await getData("home");

//     // Pass data to the page via props
//     return {
//         props: {
//             homeSectionData,
//         },
//     };
// }