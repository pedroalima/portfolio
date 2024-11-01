import { AdminProvider } from "@/context/AdminContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pedro Lima",
    description: "Desenvolvedor Front-end",
    icons: {
        icon: ["/favicon.ico?v=4"],
        apple: ["/apple-touch-icon.png?v=4"],
        shortcut: ["/apple-touch-icon.png"]
    }
};

export default function RootLayout({ children } : { children: React.ReactNode}) {
    return (
        <html lang="en">
            <AdminProvider>
                <body className={`${inter.className} text-white flex flex-col lg:flex-row lg:justify-between lg:gap-4 px-6 py-12 lg:p-0 lg:mx-32`}>
                    {children}
                </body>
            </AdminProvider>
        </html>
    );
}
