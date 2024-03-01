import { ClientSectionDataTypes } from "@/types";

export default function ClientExperience({ experience, education } : { experience: ClientSectionDataTypes, education: ClientSectionDataTypes}) {
    return (
        <div className="experience-bg min-h-dvh px-12" id="experience">
            <div className="py-10">
                <h3 className="text-4xl font-semibold text-center py-8">Experiência</h3>
            </div>
        
            <div className="flex justify-around items-start">
                <div className="p-12 w-1/2 flex flex-col gap-20">
                    <h3 className="text-3xl">Prática</h3>
                    <div className="rounded-lg p-8 container-bg">
                        <div className="flex justify-between">
                            <span>{experience.data[0].company}</span>
                            <div>
                                <span>{experience.data[0].duration} / </span>
                                <span>{experience.data[0].location}</span>
                            </div>
                        </div>
                        <h3 className="text-2xl ">{experience.data[0].position}</h3>
                        <p className="text-lg font-normal text-gray-500">{experience.data[0].jobprofile}</p>
                    </div>
                </div>
                <div className="p-12 w-1/2 flex flex-col gap-20">
                    <h3 className="text-3xl">Teórica</h3>
                    <div className="rounded-lg p-8 container-bg">
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