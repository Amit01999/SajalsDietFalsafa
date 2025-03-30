import { div } from 'framer-motion/client';
import React from 'react';

export default function BanglaJobPost({ job }) {
  return (
    <div>
      <div className="bg-[#FAFAFA] w-full py-10 md:pl-28 pl-6 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] mt-24">
        {job.title}
      </div>
      <div className="max-w-6xl md:ml-24 p-6 bg-white mt-2">
        <p className="text-gray-600 mt-2">কর্মঘন্টাঃ {job.hours}</p>
        <p className="text-gray-600">কর্মস্থলঃ {job.location}</p>
        <p className="text-gray-600">সংখ্যাঃ {job.vacancy}</p>
        <p className="text-gray-600">সাপোর্টিংঃ {job.supporting}</p>

        <h3 className="text-xl font-semibold mt-4">ন্যূনতম যোগ্যতা</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">নিয়োগের ধরণ</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.jobType.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">প্রবেশন পিরিয়ড</h3>
        <p className="text-gray-700">{job.instructions}</p>
        {job.skill && (
          <div>
            <h3 className="text-xl font-semibold mt-4">প্রয়োজনীয় দক্ষতাসমুহ</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {job.skill.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}
        {job.work && (
          <div>
            <h3 className="text-xl font-semibold mt-4">কাজ</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {job.work.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        <h3 className="text-xl font-semibold mt-4">আবেদনের সময়সীমা</h3>
        <p className="text-gray-700">{job.deadline}</p>

        <h3 className="text-xl font-semibold mt-4">বিশেষ দ্রষ্টব্য</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
