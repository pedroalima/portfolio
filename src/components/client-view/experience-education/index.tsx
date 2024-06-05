import { FormDataTypes } from "@/types";
import Container from "../container";
import { SectionTitle } from "../section-title";

export default function ClientExperience({ experience, education } : { experience: FormDataTypes[], education: FormDataTypes[]}) {
    return (
        <section className="pt-10 pb-5" id="experience">
            <SectionTitle text="Experiências" />
            <div className="flex flex-col justify-around items-start gap-10 pt-4 lg:pt-0">
                <ul className="flex flex-col justify-around items-start gap-5">
                    {experience && experience.map((item, i) => (
                        <Container key={i} className="px-4 lg:px-6 py-4 flex flex-col lg:flex-row justify-between items-start gap-2 lg:gap-4">
                            <div className="lg:p-1 lg:w-1/4">
                                <h4 className="text-xs uppercase font-semibold text-slate-500">{item.duration}</h4>
                            </div>
                                
                            <div className="lg:w-3/4">
                                <h4 className="text-base p-0 m-0 font-semibold">{item.position} &#183; {item.company}</h4>
                                <p className="text-sm text-slate-500">{item.location}</p>
                                <p className="text-sm font-normal leading-normal my-2 text-gray-400">{item.jobprofile}</p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.skills.split(",").map((item, i) => (
                                        <div key={i} className="bg-cyan-500/[0.1] shadow-md rounded-2xl px-3 py-1 flex justify-center items-center">
                                            <span  className="text-xs text-cyan-500 font-semibold">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    ))}
                </ul>
                <ul className="flex flex-col justify-around items-start gap-3 lg:gap-5 w-full">
                    {education && education.map((item, i) => (
                        <Container key={i} className="px-4 lg:px-6 py-2 lg:py-4 flex flex-col lg:flex-row justify-between lg:items-center gap-1 lg:gap-4">
                            <div className="lg:w-1/4">
                                <h3 className="text-xs uppercase font-semibold text-slate-500">{item.year}</h3>
                            </div>
                            
                            <div className="lg:w-3/4">
                                <h4 className="text-base font-semibold">{item.degree}</h4>
                                <p className="text-sm text-slate-500">{item.college}</p>
                            </div>
                        </Container>
                    ))}
                </ul>
            </div>
        </section>
    );
}