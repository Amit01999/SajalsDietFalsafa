import React, { useState } from 'react';
import phone from '../assets/img/socialmedia/bi/phone.png';
import facebook from '../assets/img/socialmedia/bi/facebook.png';
import youtube from '../assets/img/socialmedia/bi/youtube.png';
import mail from '../assets/img/socialmedia/bi/mail.png';

const ContactUsPage = () => {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    alert('Message Sent!');
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Left: Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Send Us A Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-[#F6F6F6] w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-[#F6F6F6] w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="comment"
              placeholder="Comment*"
              required
              rows="5"
              value={form.comment}
              onChange={handleChange}
              className="bg-[#F6F6F6] w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Details
          </h3>
          <div className="text-gray-700 space-y-4">
            <div className="space-y-2">
              <h4 className="text-[#808080] font-semibold">Chamber 1:</h4>
              <p>Bangladesh Center for Rehabilitation</p>
              <p>234/C (1st Floor), Sonargaon Road, Katabon, Dhaka 1205</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Chamber 2:</h4>
              <p>Thyrocare Consultation Center (Wellness and Aesthetics)</p>
              <p>Rupsha Tower, House 72, Level-03, Road No. 11, Dhaka-1213</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Chamber 3:</h4>
              <p>Mayfair Wellness Clinic</p>
              <p>
                Molly Capita Centre, 2nd Floor, Road-127, 76 Gulshan Avenue,
                Dhaka-1212
              </p>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 mb-3">
                <img src={mail} className="w-6 h-6" alt="Mail" />
                <a
                  href="mailto:sajal2019@gmail.com"
                  className="hover:underline"
                >
                  sajal2019@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 mb-3">
                <img src={phone} className="w-6 h-6" alt="Phone" />
                <a href="tel:+8801992051548" className="hover:underline">
                  +88 01992 051548
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600">
                <img src={facebook} className="w-8 h-8" alt="Facebook" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <img src={youtube} className="w-8 h-8" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
