import { ClientSectionDataTypes } from "@/types";

export default function ClientEducation({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);
    
    return (
        <div className="min-h-dvh flex justify-center items-center">EducationClient</div>
    );
}