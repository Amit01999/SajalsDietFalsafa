import phone from '../assets/img/socialmedia/phone.png';
import facebook from '../assets/img/socialmedia/facebook1.png';
import youtube from '../assets/img/socialmedia/youtube1.png';
import mail from '../assets/img/socialmedia/mail1.png';
import telegram from '../assets/img/socialmedia/telegram1.png';
const Footer = () => {
  return (
    <footer className="bg-[#2A2B2A] text-[#bdbdbd] pt-10 mt-auto footer mb-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-5">
        {/* Contact Section */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-3">Contact</h3>
          <p>Bangladesh Center for Rehabilitation</p>
          <p>234/C (1st Floor), Sonargaon Road</p>
          <p>Katabon, Dhaka 1205</p>
          <br />
          <p>Thyrocare Consultation Center (Wellness and Aesthetics)</p>
          <p>Rupsha Tower, House 72, Level-03, Road No. 11,</p>
          <p>Dhaka-1213</p>
          <br />
          <p>Ascent Health</p>
          <p>House 3D, Road 2A,</p>
          <p> Block-J, Baridhara-1212</p>
          <br />
          <h3 className="text-2xl text-white font-semibold mb-3">
            Connect With Us
          </h3>
          <p className="flex items-center">
            <span className="mr-2">
              <img src={phone} />
            </span>{' '}
            01992-051548
          </p>
          <div className="flex space-x-3 mt-5">
            <span
              onClick={() =>
                (window.location.href = 'mailto:asajal2019@gmail.com')
              }
            >
              <img
                src={mail}
                className="cursor-pointer h-5 hover:scale-110 transition duration-300"
              />
            </span>
            <span
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg',
                  '_blank'
                )
              }
            >
              <img
                src={youtube}
                className="hover:scale-110 transition duration-300 cursor-pointer  h-5"
              />
            </span>
            <span
              onClick={() =>
                window.open(
                  'https://www.facebook.com/SajalsDietFalsafa/',
                  '_blank'
                )
              }
            >
              <img
                src={facebook}
                className="hover:scale-110 transition duration-300 cursor-pointer  h-6"
              />
            </span>
            <span
              onClick={() => window.open('https://t.me/DietFalsafa', '_blank')}
            >
              <img
                src={telegram}
                className=" hover:scale-110 transition duration-300 cursor-pointer  h-6"
              />
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
              <hr className="border-gray-600 mb-3" />
            </li>
            <li>
              <a href="#" className="hover:underline">
                Programs
              </a>
              <hr className="border-gray-600 mb-3" />
            </li>
            <li>
              <a href="#" className="hover:underline">
                Appointment
              </a>
              <hr className="border-gray-600 mb-3" />
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
              <hr className="border-gray-600 mb-3" />
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-3">
            Send Us A Message
          </h3>
          <form>
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-2 mb-3 bg-[#252525] text-white border border-gray-600"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-2 mb-3 bg-[#252525] text-white border border-gray-600"
            />
            <textarea
              placeholder="Comment*"
              className="w-full p-2 mb-3 bg-[#252525] text-white border border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center bg-[#202020] mt-10 border-t border-gray-800 p-5 text-white ">
        <p>
          &copy; 2023 sajalsdietfalsafa.com | Developed by{' '}
          <a href="https://it.ysibangla.com/" className="text-green-400">
            YSI Bangla Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
