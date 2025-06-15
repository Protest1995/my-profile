
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ACCENT_COLOR, ACCENT_BG_COLOR } from '../../constants';
import PhoneIcon from '../icons/PhoneIcon';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import MapPinIcon from '../icons/MapPinIcon';
import PaperAirplaneIcon from '../icons/PaperAirplaneIcon';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! (This is a demo)');
  };

  return (
    <div className="space-y-12">
      <SectionTitle title="Get in Touch" subtitle="Feel free to contact me for any inquiries" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-zinc-900 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-zinc-700 border border-zinc-600 text-neutral-200 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 placeholder-zinc-500" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full bg-zinc-700 border border-zinc-600 text-neutral-200 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 placeholder-zinc-500" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">Subject</label>
              <input type="text" name="subject" id="subject" required className="w-full bg-zinc-700 border border-zinc-600 text-neutral-200 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 placeholder-zinc-500" placeholder="Message Subject" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
              <textarea name="message" id="message" rows={5} required className="w-full bg-zinc-700 border border-zinc-600 text-neutral-200 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 placeholder-zinc-500" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className={`${ACCENT_BG_COLOR} text-zinc-900 font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity duration-200 shadow-md flex items-center`}
              >
                <PaperAirplaneIcon className="w-5 h-5 mr-2 transform -rotate-45" />
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Contact Information</h3>
            <div className="bg-zinc-900 p-6 rounded-lg shadow-xl space-y-4">
                <div className="flex items-start">
                    <MapPinIcon className={`w-6 h-6 ${ACCENT_COLOR} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                        <h4 className="font-semibold text-neutral-100">Address</h4>
                        <p className="text-neutral-400">123 Creative Street, New York, NY 10001, USA</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <PhoneIcon className={`w-6 h-6 ${ACCENT_COLOR} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                        <h4 className="font-semibold text-neutral-100">Phone</h4>
                        <p className="text-neutral-400">+1 234 567 8900</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <EnvelopeIcon className={`w-6 h-6 ${ACCENT_COLOR} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                        <h4 className="font-semibold text-neutral-100">Email</h4>
                        <p className="text-neutral-400">john.doe@example.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg shadow-xl">
                <h4 className="font-semibold text-neutral-100 mb-3">Working Hours</h4>
                <p className="text-neutral-400">Monday - Friday: 9am - 5pm</p>
                <p className="text-neutral-400">Saturday - Sunday: Closed</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
