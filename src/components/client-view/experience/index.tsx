import { ClientSectionDataTypes } from "@/types";

export default function ClientExperience({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    return (
        <div className="min-h-dvh container mx-auto flex justify-center items-center" id="experience">
            <div className="p-2">
                <div className="w-1/3 border-2 border-cyan-400 rounded-lg p-8">
                    <div className="flex justify-between">
                        <span>{data.data[0].company}</span>
                        <div>
                            <span>{data.data[0].duration} / </span>
                            <span>{data.data[0].location}</span>
                        </div>
                    </div>
                    <h3 className="text-2xl">{data.data[0].position}</h3>
                    <p>{data.data[0].jobprofile}</p>
                </div>
            </div>
        </div>
    );
}