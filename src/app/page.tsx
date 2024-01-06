import Footer from "@/components/app/footer";
import Navbar from "@/components/app/navbar";



export default function Home() {
    return (
        <>
            <div id="Home" className="h-dvh">
                <Navbar />
            
                <h1>Hello World 1</h1>
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
