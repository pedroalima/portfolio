import ClientAbout from "@/components/client-view/about";
import ClientExperience from "@/components/client-view/experience-education";
import Footer from "@/components/client-view/footer";
import ClientHome from "@/components/client-view/home";
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
        <>
            <header className="static lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24">
                <ClientHome data={homeSectionData} />
            </header>
            <main className="lg:w-1/2 lg:flex lg:flex-col gap-24">
                <ClientAbout data={aboutSectionData} />
                <ClientExperience experience={experienceSectionData} education={educationSectionData} />
                <ClientProjects data={projectsSectionData} />
                <Footer />
            </main>
        </>
    );
}