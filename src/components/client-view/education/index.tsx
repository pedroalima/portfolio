import { ClientSectionDataTypes } from "@/types";

export default function ClientEducation({ data } : { data: ClientSectionDataTypes}) {
    return (
        <div className="min-h-dvh flex justify-center items-center" id="education">{data.data[0].degree}</div>
    );
}