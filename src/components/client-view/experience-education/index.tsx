import { ClientSectionDataTypes } from "@/types";

export default function ClientExperience({ experience, education } : { experience: ClientSectionDataTypes, education: ClientSectionDataTypes}) {
    return (
        <section className="py-8 p-6" id="experience">
            <div className="flex flex-col justify-around items-start gap-10">

                <div className="flex flex-col justify-around items-start gap-5">
                    {experience.data && experience.data.map((item, i) => (
                        <div key={i} className="rounded-lg px-6 py-4 container-bg w-full flex justify-between items-center">
                            <h3 className="text-xs uppercase font-semibold text-slate-500">{experience.data[0].duration}</h3>
                                
                            <div className="w-9/12">
                                <h4 className="text-base">{item.position} &#183; {item.company}</h4>
                                <p className="text-sm text-slate-500">{item.location}</p>
                                <p className="text-sm font-normal text-gray-400">{item.jobprofile}</p>
                            </div>
                        </div>
                    ))}
                </div>
                        
                <div className="flex flex-col justify-around items-start gap-5 w-full">
                    {education.data && education.data.map((item, i) => (
                        <div key={i} className="rounded-lg px-6 py-4 container-bg w-full flex justify-between items-center">
                            <h3 className="text-xs uppercase font-semibold text-slate-500">{item.year}</h3>
                            
                            <div className="w-9/12">
                                <h4 className="text-base">{item.degree}</h4>
                                <p className="text-sm text-slate-500">{item.college}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}