import { ClientSectionDataTypes } from "@/types";

export default function ClientAbout({ data } : { data: ClientSectionDataTypes}) {
    return (
        <div className="min-h-dvh flex justify-center items-center" id="about">{data.data[0].about}</div>
    );
}