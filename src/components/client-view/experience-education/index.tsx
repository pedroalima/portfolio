import { FormDataTypes } from "@/types";

export default function ClientExperience({ experience, education } : { experience: FormDataTypes[], education: FormDataTypes[]}) {
    return (
        <section className="px-6 py-10" id="experience">
            <div className="flex flex-col justify-around items-start gap-10">

                <div className="flex flex-col justify-around items-start gap-5">
                    {experience && experience.map((item, i) => (
                        <div key={i} className="group cursor-pointer rounded-lg px-6 py-4 shadow-md container-bg w-full flex justify-between items-center">
                            <h3 className="text-xs uppercase font-semibold text-slate-500">{item.duration}</h3>
                                
                            <div className="w-9/12">
                                <h4 className="text-base font-semibold group-hover:text-cyan-500">{item.position} &#183; {item.company}</h4>
                                <p className="text-sm text-slate-500">{item.location}</p>
                                <p className="text-sm font-normal text-gray-400">{item.jobprofile}</p>
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