import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../assets/img/notfound.jpg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 mt-20">
      <h1 className="text-2xl font-semibold text-gray-700">
        404 - Page not found
      </h1>
      <img src={notfound} alt="Broken Egg" className="w-64 h-64 my-6" />
      <h2 className="text-xl font-bold text-gray-900">
        The page you are looking for is not found
      </h2>
      <p className="text-gray-500 max-w-md mt-2">
        The page you are looking for does not exist. It may have been moved or
        removed altogether. Perhaps you can return to the homepage and try
        again.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800"
      >
        Back To Home Page
      </button>
    </div>
  );
};

export default NotFound;
