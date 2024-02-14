import { ClientSectionDataTypes } from "@/types";

export default function ClientExperience({ experience, education } : { experience: ClientSectionDataTypes, education: ClientSectionDataTypes}) {
    console.log(experience);
    console.log(education);

    return (
        <div className="min-h-dvh container mx-auto flex justify-around items-center" id="experience">
            <div className="p-12 w-1/2">
                <div className="border-2 border-cyan-400 rounded-lg p-8">
                    <div className="flex justify-between">
                        <span>{experience.data[0].company}</span>
                        <div>
                            <span>{experience.data[0].duration} / </span>
                            <span>{experience.data[0].location}</span>
                        </div>
                    </div>
                    <h3 className="text-2xl">{experience.data[0].position}</h3>
                    <p>{experience.data[0].jobprofile}</p>
                </div>
            </div>
            <div className="p-12 w-1/2">
                <div className="border-2 border-cyan-400 rounded-lg p-8">
                    <div className="flex justify-between">
                        <span>{education.data[0].college}</span>
                        <span>{education.data[0].year}</span>
                    </div>
                    <h3 className="text-2xl">{education.data[0].degree}</h3>
                </div>
            </div>
        </div>
    );
}