import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatus('success');
        e.target.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="bg-bg py-8">
      <div className="max-w-[1280px] mx-auto px-2">
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-white/20 text-white">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
            className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            required
            className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:border-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:border-blue-500 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm">Message sent — thanks for reaching out!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Try again later.</p>
          )}
        </form>

        <footer/>
      </div>
    </section>
  );
}

export default Contact;