import { ClientSectionDataTypes } from "@/types";


export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    return (
        <div className="min-h-dvh flex justify-center items-center" id="projects">
            {data.data[0].name}
        </div>
    );
}