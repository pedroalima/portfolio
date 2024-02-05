import { ClientSectionDataTypes } from "@/types";

export default function ClientExperience({ data } : { data: ClientSectionDataTypes}) {
    return (
        <div className="min-h-dvh flex justify-center items-center" id="experience">{data.data[0].position}</div>
    );
}