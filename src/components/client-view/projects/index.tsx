import { ClientSectionDataTypes } from "@/types";
import Link from "next/link";

export default function ClientProjects({ data } : { data: ClientSectionDataTypes}) {
    console.log(data);

    return (
        <div className="min-h-dvh flex justify-center items-center px-12" id="projects">
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    {data.data.map((item, i) => (
                        <div key={i} className="duration-700 ease-in-out w-1/4 rounded-lg px-8 pt-8 border-2 border-cyan-400">
                            <h3 className="text-2xl">{item.name}</h3>
                            <h3>{item.technologies}</h3>
                            <div className="flex justify-evenly pt-8">
                                <Link href={item.github} className="border-t-2 border-r-2 border-l-2 border-cyan-400 rounded-md p-1">GitHub</Link>
                                <Link href={item.website} className="border-t-2 border-r-2 border-l-2 border-cyan-400 rounded-md p-1">Aplicação</Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}