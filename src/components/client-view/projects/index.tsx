"use client";
import { FormDataTypes } from "@/types";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ClientProjects({ data } : { data: FormDataTypes[]}) {
    const router = useRouter();

    return (
        <section className="flex flex-col justify-evenly items-center pb-24" id="projects">
            <ul className="flex flex-col gap-5">
                {data.map((item, i) => (
                    <li key={i} className="container-bg px-6 py-4 rounded-lg shadow-md flex items-start gap-4">
                        <div className="relative w-1/4 h-20">
                            <Image src={`/${item.name.split(" ").join("")}.png`} priority fill={true} className="absolute object-cover rounded-md border-2 border-slate-200/10 transition" alt="" />
                        </div>
                
                        <div className="w-2/4">
                            <div className="">
                                <h3 className="text-base capitalize text-white">{item.name}</h3>
                                <p className="text-sm text-gray-400">{item.technologies}</p>
                            </div>

                            <div className="flex">
                                <button onClick={() => router.push(item.github)} className="px-2 py-1 text-white font-semibold text-sm tracking-widest container-bg hover:bg-cyan-500 rounded-lg">GitHub</button>
                                <button onClick={() => router.push(item.website)} className="px-2 py-1 text-white font-semibold text-sm tracking-widest container-bg hover:bg-cyan-500 rounded-lg">Aplicação</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-center mt-6">
                <p className="text-slate-500 text-sm">Tenha acesso a todos os meus projetos <a href="https://github.com/pedroalima?tab=repositories" className="text-cyan-400">aqui</a></p>
            </div>
        </section>
    );
}