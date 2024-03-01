"use client";
import { ClientSectionDataTypes } from "@/types";
import { useRouter } from "next/navigation";
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
        <div className="projects-bg bg-gray-900 min-h-dvh flex flex-col justify-evenly items-center px-12" id="projects">
            <div className="text-center">
                <h1 className="text-4xl font-semibold my-12">Projetos</h1>
                <p className="font-thin text-xl">Tenha acesso a todos os meus projetos <a href="https://github.com/pedroalima?tab=repositories" className="font-thin text-cyan-400">aqui</a></p>
            </div>
            
            <div className="w-11/12 mx-auto my-10">
                <Slider {...settings}>
                    {data.data.map((item, i) => (
                        <div key={i} className="container-bg shadow-md my-4 p-6 h-[250px] cursor-pointer relative rounded-lg">
                            <div className="h-full flex flex-col justify-start gap-10">
                                <h3 className="text-3xl capitalize font-bold">{item.name}</h3>
                                <p className="font-thin text-xl">{item.technologies}</p>
                            </div>
                            <div className="absolute bottom-0">
                                <button onClick={() => router.push(item.github)} className="p-2 mr-6 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">GitHub</button>
                                <button onClick={() => router.push(item.website)} className="p-2 text-white font-semibold text-sm tracking-widest bg-cyan-400 transition-all outline-none">Aplicação</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}