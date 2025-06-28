import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Galvan Consulting LLC",
  description: "Vehicle Reimbursement & FAVR Consulting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900 bg-white">
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Galvan Consulting Logo" className="w-12 h-12" />
            <h1 className="text-xl font-bold">Galvan Consulting LLC</h1>
          </div>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
