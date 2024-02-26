"use client";
import { ClientSectionDataTypes } from "@/types";
// import { useScroll } from "framer-motion";
// import { useRef } from "react";
import { useRouter } from "next/navigation";
// import AnimationWrapper from "../animate-wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    const router = useRouter();

    const settings = {
        accessibility:true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="min-h-dvh flex flex-col justify-around items-center px-12" id="projects">
            <h1 className="text-4xl">Meus Projetos</h1>
            
            <div className="w-11/12 m-auto">
                <Slider {...settings}>
                    {data.data.map((item, i) => (
                        <div key={i} className="p-6 h-[250px] border-2 border-cyan-400 rounded-lg">
                            <div className="">
                                <h3 className="text-2xl capitalize font-bold">{item.name}</h3>
                                <p>{item.technologies}</p>
                            </div>
                            <div className="flex justify-around">
                                <button onClick={() => router.push(item.github)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">GitHub</button>
                                <button onClick={() => router.push(item.website)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">Aplicação</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

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