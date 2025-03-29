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
import email from '../assets/img/socialmedia/bi/mail1.png';
import youtube from '../assets/img/socialmedia/bi/youtube1.png';
import facebook from '../assets/img/socialmedia/bi/facebook1.png';
import telegram from '../assets/img/socialmedia/bi/telegram.png';

const teamMembers = [
  {
    name: 'Muhammad Sajal',
    role: 'Clinical Nutritionist',
    specialization: '(Metabolic and Reproductive Nutrition)',
    image: t1,
    social: {
      // email: 'https://mail.google.com/mail/u/0/#inbox',
      // youtube: 'https://www.youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg',
      // facebook: 'https://www.facebook.com/SajalsDietFalsafa/',
      // linkedin: 'https://t.me/DietFalsafa',
      email: email,
      youtube: youtube,
      facebook: facebook,
      linkedin: telegram,
    },
    link: {
      email: 'https://mail.google.com/mail/u/0/#inbox',
      youtube: 'https://www.youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg',
      facebook: 'https://www.facebook.com/SajalsDietFalsafa/',
      linkedin: 'https://t.me/DietFalsafa',
    },
  },
  {
    name: 'Tanzima Mukti',
    role: 'PS to Clinical Nutritionist',
    image: t2,
  },
  {
    name: 'Sumya Shila',
    role: 'Nutritionist',
    specialization: '(Child and Reproductive Nutrition)',
    image: t3,
  },
  {
    name: 'Farhana Akter',
    role: 'Junior Nutritionist',
    image: t4,
  },
  {
    name: 'Sanjida Akter Shormi',
    role: 'Junior Nutritionist',
    image: t5,
  },
  {
    name: 'Shafia Tanzin Tababy',
    role: 'Junior Nutritionist (Intern)',
    image: t6,
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
    <>
      <div className="bg-[#FAFAFA] w-full py-10 pl-28 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] mt-24">
        Our Team
      </div>
      <div className="container mx-auto py-10 px-20 mt-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center mb-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-56 h-56 object-cover rounded-full mx-auto mb-3 shadow-lg"
              />
              <h3 className="text-xl md:text-3xl font-extrabold text-[#245367]">
                {member.name}
              </h3>
              <p className="text-lg text-gray-600 font-bold my-3">
                {member.role}
              </p>
              {member.specialization && (
                <p className="text-base text-[#6A6A6A] my-3">
                  {member.specialization}
                </p>
              )}
              {member.social && (
                <div className="flex justify-center mt-2 space-x-3">
                  {member.social.email && (
                    <a
                      href={member.link.email}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-10 cursor-pointer "
                        src={email}
                        alt="email"
                      />
                      {/* <Mail className="text-gray-700 hover:text-red-500 w-8 h-8" /> */}
                    </a>
                  )}
                  {member.social.youtube && (
                    <a
                      href={member.link.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-10 cursor-pointer"
                        src={youtube}
                        alt="youtube"
                      />
                      {/* <Youtube className="text-red-600 hover:text-red-700 w-8 h-8" /> */}
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.link.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-10 cursor-pointer"
                        src={facebook}
                        alt="facebook"
                      />
                      {/* <Facebook className="text-blue-600 hover:text-blue-700 w-8 h-8" /> */}
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.link.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="h-10 cursor-pointer"
                        src={telegram}
                        alt="linkedin"
                      />
                      {/* <Linkedin className="text-blue-700 hover:text-blue-800 w-8 h-8" /> */}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
