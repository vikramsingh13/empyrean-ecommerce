import Navbar from "@/components/navbar/page";
import Sidebar from "@/components/sidebar/page";
import "./globals.css";

export const metadata = {
    title: "Empyrean Ecommerce",
    description: "Fullstack MERN ecommerce with Tailwind, AWS, and Stripe",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <Navbar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
