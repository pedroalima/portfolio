import { ClientSectionDataTypes } from "@/types";

export default function ClientAbout({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    return (
        <div className="min-h-dvh flex justify-center items-center">ClientAbout</div>
    );
}