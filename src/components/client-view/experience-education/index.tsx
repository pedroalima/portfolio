import { ClientSectionDataTypes } from "@/types";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function ClientExperience({ experience, education } : { experience: ClientSectionDataTypes, education: ClientSectionDataTypes}) {
    return (
        <div className="experience-bg min-h-dvh px-12" id="experience">
            <div className="py-10">
                <h3 className="text-4xl font-semibold text-center py-8">Experiência</h3>
            </div>
        
            <div className="flex justify-around items-start">

                <div className="p-8 w-1/2 flex flex-col gap-20">
                    <div className="rounded-lg px-6 py-4 container-bg flex w-full items-start">
                        <header className="text-xs mt-1 uppercase font-semibold text-gray-500 w-3/12">{experience.data[0].duration}</header>
                        
                        <div className="w-9/12">
                            <h3 className="text-base">{experience.data[0].position} &#183; {experience.data[0].company}</h3>
                            <p className="text-sm text-gray-500">{experience.data[0].location}</p>
                            <p className="text-sm font-normal text-gray-400">{experience.data[0].jobprofile}</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 w-1/2 flex flex-col gap-20">
                    <div className="rounded-lg px-6 py-4 container-bg">
                        <div className="flex justify-between">
                            <span>{education.data[0].college}</span>
                            <span>{education.data[0].year}</span>
                        </div>
                        <h3 className="text-2xl">{education.data[0].degree}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}