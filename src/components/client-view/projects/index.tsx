"use client";
import { ClientSectionDataTypes } from "@/types";
// import { useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimationWrapper from "../animate-wrapper";

export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    const containerRef = useRef(null);
    // const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <div className="min-h-dvh flex justify-center items-center px-12" id="projects">

            <AnimationWrapper>
                <ul className="project-wrapper" ref={containerRef}>
                    {/* <!-- Items --> */}
                    {data.data.map((item, i) => (
                        <li key={i} className="w-full flex items-stretch cursor-pointer">
                            <div className="border-2 w-full relative border-cyan-400 transition-all rounded-lg flex flex-col">
                                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                    <div className="flex flex-col m-4">
                                        <h3 className="text-2xl">{item.name}</h3>
                                        <p>{item.technologies}</p>
                                        <div className="">
                                            <Link href={item.github} className="">GitHub</Link>
                                            <Link href={item.website} className="">Aplicação</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </AnimationWrapper>
        </div>
    );
}