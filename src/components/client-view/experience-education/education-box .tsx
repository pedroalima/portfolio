import { FormDataTypes } from "@/types";
import Container from "../container";

export default function EducationBox({ education } : {education: FormDataTypes[]}) {
    return (
        <>
            {education && education.map((item, i) => (
                <Container key={i} className="px-4 lg:px-6 py-2 lg:py-4 flex flex-col lg:flex-row justify-between lg:items-center gap-1 lg:gap-4">
                    <div className="lg:w-1/4">
                        <h3 className="text-xs uppercase font-semibold text-slate-500">{item.year}</h3>
                    </div>
                            
                    <div className="lg:w-3/4">
                        <h4 className="text-base font-semibold">{item.degree}</h4>
                        <p className="text-sm text-slate-500">{item.college}</p>
                    </div>
                </Container>
            ))}
        </>
    );
}
