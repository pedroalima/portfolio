import { getData } from "@/services";
import { FormDataTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../client-view/container";

interface ProjectBox {
    projects: FormDataTypes[],
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    setIsUpdate: Dispatch<SetStateAction<boolean>>
}

export default function ProjectBox({ projects, setFormData, setIsUpdate } : ProjectBox) {
    const router = useRouter();

    async function getProject(index:number) {
        const response = getData("projects");

        const data = await response;
        if (data && data.data) {
            setFormData(data.data[index]);
            setIsUpdate(true);
        }
    }

    return (
        <>
            {projects && projects.map((item, i) => (
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

                        <button 
                            onClick={() => getProject(i)}
                            className="absolute top-0 right-0 px-3 py-1 rounded-md border border-white text-sm"
                        >Editar</button>
                    </div>
                </Container>
            ))}
        </>
    );
}
