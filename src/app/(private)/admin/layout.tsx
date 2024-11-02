import { AdminProvider } from "@/context/AdminContext";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <AdminProvider>
            <section className="w-full">
                {children}
            </section>
        </AdminProvider>
    );
}