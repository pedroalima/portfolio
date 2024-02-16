"use client";
import { ClientSectionDataTypes } from "@/types";
// import { useScroll } from "framer-motion";
import { useRef } from "react";
import AnimationWrapper from "../animate-wrapper";
import { useRouter } from "next/navigation";

export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    const router = useRouter();

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
            </AnimationWrapper>
        </div>
    );
}