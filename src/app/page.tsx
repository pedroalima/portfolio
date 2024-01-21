import Footer from "@/components/app/footer";
import Navbar from "@/components/app/navbar";

// async function getAllData(currentSection: string) {
//     const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
//         method: "GET",
//         cache: "no-store"
//     });

//     const data = await res.json();

//     return data && data.data;
// }

export default async function Home() {
    return (
        <>
            <div id="Home" className="h-dvh">
                <Navbar />
            
                <h1>Hello World 1</h1>
                <div>

                </div>
            </div>
            <div id="About" className="h-dvh">
                <h1>Hello World 2</h1>
            </div>
            <div id="Products" className="h-dvh relative">
                <h1>Hello World 3</h1>

                <Footer />
            </div>
        </>
    );
}
