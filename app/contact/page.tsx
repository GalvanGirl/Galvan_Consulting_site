export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>Email: <a href="mailto:carrie@galvanconsultingservices.com" className="text-blue-600">carrie@galvanconsultingservices.com</a></p>
      <p>Phone: <a href="tel:6238533439" className="text-blue-600">623-853-3439</a></p>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full" required />
        <input type="email" placeholder="Your Email" className="border p-2 w-full" required />
        <textarea placeholder="Your Message" className="border p-2 w-full" rows={5} required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
