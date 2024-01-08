"use client";
import About from "@/components/admin-view/about";
import Home from "@/components/admin-view/home";
import Navbar from "@/components/app/navbar";

export default function Admin() {
    return (
        <div className="h-dvh">
            <Navbar />
            
            <Home /> 
            <About />
        </div>
    );
}