import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center py-10 border-b border-gray-200">
        <div className="flex justify-center mb-4">
          <Image
            src="/Galvan Consulting LLC.png"
            alt="Galvan Consulting LLC Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-4xl font-bold">Galvan Consulting LLC</h1>
        <p className="mt-2 text-lg text-gray-600">Vehicle Reimbursement & FAVR Consulting</p>
      </header>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700">
          Galvan Consulting LLC specializes in helping companies audit, optimize, and manage their vehicle reimbursement programs, including FAVR (Fixed and Variable Rate) and CPM (Cents Per Mile) solutions. We save you time and money by identifying hidden inefficiencies and negotiating better terms—at no upfront cost.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>FAVR & CPM Program Audits</li>
            <li>Fleet Right-Sizing Consultations</li>
            <li>Cost Savings Analysis (35% of first-year savings as fee)</li>
            <li>Tax Compliance & Policy Review</li>
            <li>Contract Renewal & Provider Negotiation</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 mb-4">
          Our fee structure is simple—if we don’t save you money, you pay nothing. We act on your behalf to ensure your vehicle reimbursement program is cost-effective, compliant, and competitive.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Zero upfront costs</li>
          <li>Experienced industry consultants</li>
          <li>Proven track record of savings</li>
          <li>Independent and objective analysis</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">Ready to review your current plan or coming up on renewal?</p>
          <p className="text-gray-700 mb-4">Let’s talk. Reach out today for a free consultation.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-32" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Galvan Consulting LLC. All rights reserved.
      </footer>
    </div>
  );
}
