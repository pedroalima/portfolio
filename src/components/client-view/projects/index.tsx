"use client";
import { ClientSectionDataTypes } from "@/types";
// import { useScroll } from "framer-motion";
// import { useRef } from "react";
import { useRouter } from "next/navigation";
// import AnimationWrapper from "../animate-wrapper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    const router = useRouter();

    // const containerRef = useRef(null);

    return (
        <div className="min-h-dvh flex flex-col justify-around items-center px-12" id="projects">
            <h1 className="text-5xl">Meus Projetos</h1>
            
            <Splide className="p-20 flex gap-5">
                {data && data.data && data.data.map((item, i) => (
                    <SplideSlide key={i} className="p-6 border-2 border-cyan-400 rounded-md">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <h3 className="text-2xl capitalize font-bold">{item.name}</h3>
                                    <p>{item.technologies}</p>
                                </div>
                            </div>
                            <div className="">
                                <button onClick={() => router.push(item.github)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">GitHub</button>
                                <button onClick={() => router.push(item.website)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">Aplicação</button>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            {/* <AnimationWrapper>
                <ul className="project-wrapper" ref={containerRef}>
                    {data.data.map((item, i) => (
                        <li key={i} className="w-full flex items-stretch cursor-pointer">
                            <div className="border-2 w-full relative border-cyan-400 transition-all rounded-lg flex flex-col">
                                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                    <div className="flex flex-col m-4">
                                        <h3 className="text-2xl capitalize font-bold">{item.name}</h3>
                                        <p>{item.technologies}</p>
                                    </div>
                                </div>
                                <div className="absolute w-full bottom-0 justify-center flex gap-2">
                                    <button onClick={() => router.push(item.github)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">GitHub</button>
                                    <button onClick={() => router.push(item.website)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">Aplicação</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </AnimationWrapper> */}
        </div>
    );
}