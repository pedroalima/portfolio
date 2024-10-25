import { FormDataTypes } from "@/types";
import Container from "../container";

export default function ExperienceBox({ experience } : {experience: FormDataTypes[]}) {
    return (
        <>
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
        </>
    );
}
