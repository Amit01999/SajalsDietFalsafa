import React, { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
    agree: false,
  });

  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="max-w-3xl mt-10 mx-auto bg-white p-8 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Apply for this position</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block font-medium">
            Cover Letter <span className="text-red-500">*</span>
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md h-24"
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-medium">
            Upload CV/Resume <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
          <p className="text-sm text-gray-500 mt-1">
            Allowed type(s): .pdf, .doc, .docx
          </p>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="mr-2"
          />
          <label className="text-sm text-gray-600">
            By using this form you agree with the storage and handling of your
            data by this website. <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
