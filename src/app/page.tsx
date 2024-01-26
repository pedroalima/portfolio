import AboutClient from "@/components/client-view/about-client";
import ContactClient from "@/components/client-view/contact-client";
import EducationClient from "@/components/client-view/education-client";
import ExperienceClient from "@/components/client-view/experience-client";
import HomeClient from "@/components/client-view/home-client";
import ProjectsClient from "@/components/client-view/projects-client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// async function getAllData(currentSection: string) {
//     const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
//         method: "GET",
//         cache: "no-store"
//     });

//     const data = await res.json();

//     return data && data.data;
// }

export default async function Home() {
    const clientPages = [
        {
            id: "home",
            component: (
                <HomeClient />
            )
        },
        {
            id: "about",
            component: (
                <AboutClient />
            )
        },
        {
            id: "experience",
            component: (
                <ExperienceClient />
            )
        },
        {
            id: "education",
            component: (
                <EducationClient />
            )
        },
        {
            id: "projects",
            component: (
                <ProjectsClient />
            )
        },
        {
            id: "contact",
            component: (
                <ContactClient />
            )
        },
    ];

    return (
        <div className="bg-gray-50">
            <Navbar />
            
            {clientPages.map((page) => (
                <div id={page.id} key={page.id}>
                    {page.component}
                </div>
            ))}

            <Footer />
        </div>
    );
}
