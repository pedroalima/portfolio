import { FormDataTypes } from "@/types";
import { SectionTitle } from "../section-title";
import EducationBox from "./education-box ";
import ExperienceBox from "./experience-box";

export default function ClientExperience({ experience, education } : { experience: FormDataTypes[], education: FormDataTypes[]}) {
    return (
        <section className="pt-10 pb-5" id="experience">
            <SectionTitle text="Experiências" />
            <div className="flex flex-col justify-around items-start gap-10 pt-4 lg:pt-0">
                <ul className="flex flex-col justify-around items-start gap-5">
                    <ExperienceBox experience={experience} />
                </ul>
                <ul className="flex flex-col justify-around items-start gap-3 lg:gap-5 w-full">
                    <EducationBox education={education} />
                </ul>
            </div>
        </section>
    );
}