import { ClientSectionDataTypes } from "@/types";


export default function ClientHome({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    return (
        <div className="min-h-dvh p-8 flex justify-start items-center">
            <div>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{data.data[0].mainText}</span>!</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl">{data.data[0].description}</p>
            </div>
        </div>
    );
}