"use client";
import { FormDataTypes } from "@/types";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ClientProjects({ data } : { data: FormDataTypes[]}) {
    const router = useRouter();

    const settings = {
        accessibility:true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <section className="bg-gray-900 flex flex-col justify-evenly items-center px-6 pb-24" id="projects">
            <div className="w-11/12 mx-auto my-10">
                <Slider {...settings}>
                    {data.map((item, i) => (
                        <div key={i} className="container-bg shadow-md my-4 px-6 py-4 h-[350px] flex flex-col justify-between cursor-pointer rounded-lg">
                            <div className="h-full flex flex-col justify-between">
                                <div className="rounded-lg self-center overflow-hidden">
                                    <Image src="/profile-original.jpg" width={500} height={160} alt=""  />
                                </div>

                                <div className="h-1/3">
                                    <h3 className="text-base capitalize text-white">{item.name}</h3>
                                    <p className="text-sm text-gray-400">{item.technologies}</p>
                                </div>

                                <div className="flex justify-between">
                                    <button onClick={() => router.push(item.github)} className="px-2 py-1 text-white font-semibold text-sm tracking-widest bg-cyan-500 hover:bg-cyan-600 transition-all outline-none rounded-lg">GitHub</button>
                                    <button onClick={() => router.push(item.website)} className="px-2 py-1 text-white font-semibold text-sm tracking-widest bg-cyan-500 hover:bg-cyan-600 transition-all outline-none rounded-lg">Aplicação</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="text-center mt-6">
                <p className="text-slate-500 text-sm">Tenha acesso a todos os meus projetos <a href="https://github.com/pedroalima?tab=repositories" className="text-cyan-400">aqui</a></p>
            </div>
        </section>
    );
}