import { ClientSectionDataTypes } from "@/types";


export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);
    return (
        <div className="min-h-dvh flex justify-center items-center">
            ProjectsClient
        </div>
    );
}