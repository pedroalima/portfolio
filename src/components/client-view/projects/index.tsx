"use client";
import { FormDataTypes } from "@/types";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function ClientProjects({ data } : { data: FormDataTypes[]}) {
    const router = useRouter();

    return (
        <section className="flex flex-col justify-evenly items-center pb-24" id="projects">
            <ul className="flex flex-col gap-5">
                {data.map((item, i) => (
                    <li key={i} className="container-bg px-6 py-4 rounded-lg shadow-md flex items-start gap-4">
                        <div className="relative w-1/4 h-20 cursor-pointer" onClick={() => router.push(item.website)}>
                            <Image src={`/${item.name.split(" ").join("")}.png`} priority fill={true} className="absolute object-cover rounded-md border-2 border-slate-200/10 transition hover:border-slate-100/30" alt="" />
                        </div>
                
                        <div className="w-2/4 flex flex-col">
                            <div className="">
                                <Link target="_blank" href={item.website} className="text-base font-semibold capitalize text-white hover:text-cyan-500 group">
                                    <span className="relative">{item.name} <RiArrowRightUpLine className="absolute transition-all top-1 -right-4 group-hover:top-0 group-hover:-right-5" /></span> 
                                </Link>
                                <p className="text-sm text-gray-400">{item.technologies}</p>
                            </div>

                            <div className="flex self-end">
                                <Link href={item.github} className="px-2 py-1 text-cyan-500 font-semibold text-sm">GitHub</Link>
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