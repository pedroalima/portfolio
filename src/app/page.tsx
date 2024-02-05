import ClientHome from "@/components/client-view/home";
import ClientAbout from "@/components/client-view/about";
import ClientExperience from "@/components/client-view/experience";
import ClientEducation from "@/components/client-view/education";
import ClientProjects from "@/components/client-view/projects";
import ClientContact from "@/components/client-view/contact";

async function getAllData(currentSection: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/${currentSection}/get`, {
        method: "GET",
        cache: "no-store",
    });

    const data = await res.json();

    return data;
}

export default async function Home() {

    const homeSectionData = await getAllData("home");
    const aboutSectionData = await getAllData("about");
    const experienceSectionData = await getAllData("experience");
    const educationSectionData = await getAllData("education");
    const projectsSectionData = await getAllData("projects");
    
    return (
        <div className="bg-gray-900 text-white">
            <ClientHome data={homeSectionData} />
            <ClientAbout data={aboutSectionData} />
            <ClientExperience data={experienceSectionData} />
            <ClientEducation data={educationSectionData} />
            <ClientProjects data={projectsSectionData} />
            <ClientContact />
        </div>
    );
}
