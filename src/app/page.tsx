import ClientHome from "@/components/client-view/home";
import ClientAbout from "@/components/client-view/about";
import ClientExperience from "@/components/client-view/experience-education";
import ClientProjects from "@/components/client-view/projects";

async function extractAllData(currentSection: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/${currentSection}/get`, {
        method: "GET",
        cache: "no-store",
    });
  
    const data = await res.json();
  
    return data && data.data;
}

export default async function Home() {
    const homeSectionData = await extractAllData("home");
    const aboutSectionData = await extractAllData("about");
    const experienceSectionData = await extractAllData("experience");
    const educationSectionData = await extractAllData("education");
    const projectsSectionData = await extractAllData("projects");
    
    return (
        <div className="text-white flex justify-between gap-4 mx-20">
            <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24">
                <ClientHome data={homeSectionData} />
            </header>
            <main className="lg:pt-24 lg:w-1/2 lg:py-24 lg:flex lg:flex-col lg: gap-16">
                <ClientAbout data={aboutSectionData} />
                <ClientExperience experience={experienceSectionData} education={educationSectionData} />
                <ClientProjects data={projectsSectionData} />
            </main>
        </div>
    );
}