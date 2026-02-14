import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic (e.g. send to API or email service)
    console.log("Contact form:", form);
  };
  const baseCss = "mt-1 w-full rounded-lg border border-cyan-200/80 bg-white px-3 py-2 text-sky-900 placeholder:text-sky-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
  return (
    <main className="min-h-[60vh] bg-sky-50">
      {/* Header */}
      <section className="border-b border-cyan-200/60 bg-white/80 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-2xl font-semibold text-sky-900 sm:text-3xl md:text-4xl">
            Contact us
          </h1>
          <p className="mt-2 text-sky-700/90 text-sm sm:text-base md:text-lg">
            Get in touch — we’re here to help with your trip.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-sky-900">Get in touch</h2>
            <ul className="mt-4 space-y-4 text-sm sm:text-base text-sky-800/90">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 shrink-0" aria-hidden>✉</span>
                <div>
                  <span className="font-medium text-sky-900">Email</span>
                  <br />
                  <a href="mailto:contact@suntravel.example" className="hover:text-cyan-600 hover:underline">
                    contact@suntravel.example
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 shrink-0" aria-hidden>📞</span>
                <div>
                  <span className="font-medium text-sky-900">Phone</span>
                  <br />
                  <a href="tel:+46701234567" className="hover:text-cyan-600 hover:underline">
                    +46 70 123 45 67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 shrink-0" aria-hidden>📍</span>
                <div>
                  <span className="font-medium text-sky-900">Address</span>
                  <br />
                  Example Street 1, 123 45 Stockholm
                </div>
              </li>
            </ul>
            <p className="mt-6 text-sm text-sky-600">
              We usually reply within 24 hours on weekdays.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-lg font-semibold text-sky-900">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sky-800">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={baseCss}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sky-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={baseCss}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sky-800">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={baseCss}
                  placeholder="Booking, question, etc."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sky-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={baseCss}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-600 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto sm:px-6"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
