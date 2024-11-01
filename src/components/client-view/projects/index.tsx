"use client";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { FormDataTypes } from "@/context/AdminContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../container";
import { SectionTitle } from "../section-title";

export default function ClientProjects({ data } : { data: FormDataTypes[]}) {
    const router = useRouter();

    return (
        <section id="projects">
            <SectionTitle text="Projetos" />
            <div className="flex flex-col justify-evenly items-center pt-8 pb-10">
                <ul className="flex flex-col gap-5">
                    {data && data.map((item, i) => (
                        <Container key={i} className="px-4 lg:px-6 py-4 flex flex-col lg:flex-row lg:items-start gap-4">
                            <div className="relative lg:w-1/4 h-20 cursor-pointer" onClick={() => router.push(item.website)}>
                                <Image src={`/${item.name.split(" ").join("").toLowerCase()}.png`} priority fill={true} sizes="100%" className="absolute object-cover rounded-md border-2 border-slate-200/10 transition hover:border-slate-100/30" alt="" />
                            </div>
                
                            <div className="lg:w-3/4 flex flex-col relative">
                                <div>
                                    <Link 
                                        target="_blank" 
                                        href={item.website} 
                                        className="text-base font-semibold capitalize text-white hover:text-cyan-500 group">
                                        <span className="relative">{item.name} <GoArrowUpRight size={18} className="absolute transition-all top-0 -right-5 group-hover:-top-[2px] group-hover:-right-[22px]" /></span> 
                                    </Link>
                                    <p className="text-sm text-gray-400 mt-3">{item.technologies}</p>
                                </div>

                                <div className="flex self-end mt-3 lg:mt-0 group">
                                    <Link href={item.github} className="px-4 py-1 text-white hover:text-cyan-500 font-semibold text-xs relative">Mais Detalhes <IoIosArrowRoundForward size={25} className="absolute transition-all -right-2 group-hover:-right-3 top-[2px]" /></Link>
                                </div>
                            </div>
                        </Container>
                    ))}
                </ul>
                <div className="text-center mt-6">
                    <p className="text-slate-500 text-sm">Tenha acesso a todos os projetos <Link href="https://github.com/pedroalima?tab=repositories" className="text-gray-200">aqui</Link></p>
                </div>
            </div>
        </section>
    );
}