import { ClientSectionDataTypes } from "@/types";
import Image from "next/image";
import profile from "../../../../public/profile.png";

export default function ClientHome({ data } : { data: ClientSectionDataTypes}) {
    return (
        <div className="min-h-dvh p-8 flex justify-between items-center" id="home">
            <div className="w-1/2">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                    {data.data[0].mainText
                        .split(" ")
                        .map((word, index) => (
                            <span 
                                key={index} 
                                className={`${
                                    index === 1
                                        ? "text-7xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
                                        : "text-white" 
                                }`}
                            >
                                {word}{" "}
                            </span>
                        ))
                    }
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl">{data.data[0].description}</p>
            </div>
            <div className="w-1/2 flex justify-center">
                <Image src={profile} width={500} alt="Image profile" />
            </div>
        </div>
    );
}