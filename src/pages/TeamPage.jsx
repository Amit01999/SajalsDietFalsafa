import React from 'react';
import { Mail, Youtube, Facebook, Linkedin } from 'lucide-react';
import t1 from '../assets/img/Team/t1.png';
import t2 from '../assets/img/Team/t2.png';
import t3 from '../assets/img/Team/t3.png';
import t4 from '../assets/img/Team/t4.png';
import t5 from '../assets/img/Team/t5.png';
import t6 from '../assets/img/Team/t6.png';
import t7 from '../assets/img/Team/t7.png';
import t8 from '../assets/img/Team/t8.png';

const teamMembers = [
  {
    name: 'Muhammad Sajal',
    role: 'Clinical Nutritionist',
    specialization: '(Metabolic and Reproductive Nutrition)',
    image: t1,
    social: {
      email: 'https://mail.google.com/mail/u/0/#inbox',
      youtube: 'https://www.youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg',
      facebook: 'https://www.facebook.com/SajalsDietFalsafa/',
      linkedin: 'https://t.me/DietFalsafa',
    },
  },
  {
    name: 'Tanzima Mukti',
    role: 'PS to Clinical Nutritionist',
    image: t5,
  },
  {
    name: 'Sumya Shila',
    role: 'Nutritionist',
    specialization: '(Child and Reproductive Nutrition)',
    image: t2,
  },
  {
    name: 'Farhana Akter',
    role: 'Junior Nutritionist',
    image: t6,
  },
  {
    name: 'Sanjida Akter Shormi',
    role: 'Junior Nutritionist',
    image: t3,
  },
  {
    name: 'Shafia Tanzin Tababy',
    role: 'Junior Nutritionist (Intern)',
    image: t4,
  },
  {
    name: 'Sanzida Tasneem',
    role: 'Junior Nutritionist (Intern)',
    image: t7,
  },
  {
    name: 'Ali Arfana',
    role: 'Female Fitness Instructor',
    image: t8,
  },
];

const TeamPage = () => {
  return (
    <div className="container mx-auto py-10 px-10 mt-20">
      <h2 className="text-center text-2xl font-semibold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-3 shadow-lg"
            />
            <h3 className="text-xl font-bold text-[#245367]">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            {member.specialization && (
              <p className="text-xs text-[#7A7A7A]">{member.specialization}</p>
            )}
            {member.social && (
              <div className="flex justify-center mt-2 space-x-3">
                {member.social.email && (
                  <a
                    href={member.social.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="text-gray-700 hover:text-red-500 w-8 h-8" />
                  </a>
                )}
                {member.social.youtube && (
                  <a
                    href={member.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="text-red-600 hover:text-red-700 w-8 h-8" />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="text-blue-600 hover:text-blue-700 w-8 h-8" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-blue-700 hover:text-blue-800 w-8 h-8" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
