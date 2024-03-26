import { FormDataTypes } from "@/types";

export default function ClientExperience({ experience, education } : { experience: FormDataTypes[], education: FormDataTypes[]}) {
    return (
        <section className="pt-10 pb-5" id="experience">
            <div className="flex flex-col justify-around items-start gap-10">

                <div className="flex flex-col justify-around items-start gap-5">
                    {experience && experience.map((item, i) => (
                        <div key={i} className="group cursor-pointer rounded-lg px-6 py-4 shadow-md container-bg w-full flex justify-between items-start">
                            <div className="p-1">
                                <h4 className="text-xs uppercase font-semibold text-slate-500">{item.duration}</h4>
                            </div>
                                
                            <div className="w-9/12">
                                <h4 className="text-base p-0 m-0 font-semibold group-hover:text-cyan-500">{item.position} &#183; {item.company}</h4>
                                <p className="text-sm text-slate-500">{item.location}</p>
                                <p className="text-sm font-normal my-2 text-gray-400">{item.jobprofile}</p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.skills.split(",").map((item, i) => (
                                        <div key={i} className="bg-cyan-500/[0.1] shadow-md rounded-2xl px-3 py-1 flex justify-center items-center">
                                            <span  className="text-xs text-cyan-500 font-semibold">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                        
                <div className="flex flex-col justify-around items-start gap-5 w-full">
                    {education && education.map((item, i) => (
                        <div key={i} className="rounded-lg cursor-pointer px-6 py-4 shadow-md container-bg w-full flex justify-between items-center">
                            <h3 className="text-xs uppercase font-semibold text-slate-500">{item.year}</h3>
                            
                            <div className="w-9/12">
                                <h4 className="text-base font-semibold">{item.degree}</h4>
                                <p className="text-sm text-slate-500">{item.college}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}