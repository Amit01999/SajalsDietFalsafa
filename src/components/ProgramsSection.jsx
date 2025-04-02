import { Link } from 'react-router-dom';
import programsData from '../Data/programslink';

const ProgramsSection = () => {
  return (
    <section className="p-12 ">
      <h2 className="text-4xl font-bold m-12">Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {programsData.map((program, index) => (
          <Link to={program.link} key={program.id} className="block">
            <div
              className={`p-6 rounded-lg shadow-md ${program.color} flex flex-col items-center text-center`}
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-20 h-20 object-contain mb-4"
              />
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
