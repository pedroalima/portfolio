"use client";
import { FormDataTypes } from "@/types";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { SectionTitle } from "../section-title";
import ProjectBox from "./project-box";

export default function ClientProjects({ data } : { data: FormDataTypes[]}) {
    return (
        <section id="projects">
            <SectionTitle text="Projetos" />
            <div className="flex flex-col justify-evenly items-center pt-8 pb-10">
                <ul className="flex flex-col gap-5">
                    <ProjectBox data={data} />
                </ul>
                <div className="text-center mt-6">
                    <p className="text-slate-500 text-sm">Tenha acesso a todos os projetos <Link href="https://github.com/pedroalima?tab=repositories" className="text-gray-200">aqui</Link></p>
                </div>
            </div>
        </section>
    );
}