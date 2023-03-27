
import { NavbarProvider } from "@/contexts/NavbarContexts";
import "./globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export const metadata = {
    title: "Empyrean Ecommerce",
    description: "Fullstack MERN ecommerce with Tailwind, AWS, and Stripe",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="cursor-default bg-zinc-200">
                <NavbarProvider>


                <main>
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <Navbar />
                        {children}
                    </div>
                </main>
                </NavbarProvider>
            </body>
        </html>
    );
}
