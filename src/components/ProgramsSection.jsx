import img1 from '../assets/img/1.-CMag-Baby.png';
import img2 from '../assets/img/6.-Body-Reshaping.png';
import img3 from '../assets/img/3.-Fatty-Liver.png';
import img4 from '../assets/img/7.-Mens-Sexual-Health.png';
import img5 from '../assets/img/Bone-Joint-Health.png';
import img6 from '../assets/img/10.-Anti-aging-protocols.png';
import img7 from '../assets/img/Pregnancy-Postpartum.png';
import img8 from '../assets/img/5.-Blood-Sugar.png';
import img9 from '../assets/img/4.-Diabetes.png';
import img10 from '../assets/img/Cancer.png';
import img11 from '../assets/img/2.-PCOS-Female-Hormonal-Balance.png';
import { Link } from 'react-router-dom';
const programsData = [
  { title: 'CMag Baby', img: img1, color: 'bg-green-100', id: 1 },
  { title: 'Body Reshaping', img: img2, color: 'bg-pink-100', id: 2 },
  { title: 'Fatty Liver', img: img3, color: 'bg-pink-200', id: 3 },
  { title: 'Men’s Sexual Health', img: img4, color: 'bg-gray-100', id: 4 },
  { title: 'Bone & Joint Health', img: img5, color: 'bg-pink-200', id: 5 },
  { title: 'Anti-Aging Protocols', img: img6, color: 'bg-green-100', id: 6 },
  { title: 'Pregnancy & Postpartum', img: img7, color: 'bg-gray-100', id: 7 },
  { title: 'Heart Health', img: img8, color: 'bg-blue-100', id: 8 },
  { title: 'Diabetes', img: img9, color: 'bg-green-200', id: 9 },
  { title: 'Cancer', img: img10, color: 'bg-pink-100', id: 10 },
  {
    title: 'PCOS & Female Hormonal Balance',
    img: img11,
    color: 'bg-blue-100',
    id: 11,
  },
];

const ProgramsSection = () => {
  return (
    <section className="p-12">
      <h2 className="text-4xl font-bold m-12">Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {programsData.map((program, index) => (
          <Link to={`/appointment/${program.id}`} key={index} className="block">
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${program.color} flex flex-col items-center text-center`}
            >
              <div className="text-5xl mb-4">
                <img src={program.img} alt="" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
              <button className="px-4 py-2 border border-black rounded-full mt-4 hover:bg-black hover:text-white transition">
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
