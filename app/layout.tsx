import "../styles/globals.css";

export const metadata = {
  title: "Galvan Consulting LLC",
  description: "Vehicle Reimbursement & FAVR Consulting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
