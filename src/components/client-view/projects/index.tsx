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
            <ul className="">
                {data.map((item, i) => (
                    <li key={i} className="container-bg shadow-md my-4 px-3 py-4 flex items-start cursor-pointer rounded-lg">
                        <Image src={`/${item.name.split(" ").join("")}.png`} width="120" height="48" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1" alt=""  />
                
                        <div className="flex flex-col gap-5 px-6">
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