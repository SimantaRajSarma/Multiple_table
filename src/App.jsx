import './App.css'

import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(1);

  const handleNext = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handlePrevious = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const handleJump = (event) => {
    const newNumber = parseInt(event.target.value);
    if (!isNaN(newNumber)) {
      setNumber(newNumber);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-white bg-indigo-900">
      <h1 className="text-4xl font-bold mb-8 text-center">Multiplication Table Viewer</h1>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <p className="text-xl font-semibold mb-4 sm:mb-0">Multiplication Table of {number}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:ml-4 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <input
          type="number"
          className="border rounded px-4 py-2 mb-4 sm:mb-0 sm:mr-4 bg-gray-800 text-white"
          placeholder="Jump to any table"
          onChange={handleJump}
        />
      </div>
      <div className="mt-6">
        <table className="border-collapse border border-gray-400">
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <tr key={i}>
                <td className="border border-gray-400 p-4">{number}</td>
                <td className="border border-gray-400 p-4">x</td>
                <td className="border border-gray-400 p-4">{i}</td>
                <td className="border border-gray-400 p-4">=</td>
                <td className="border border-gray-400 p-4">{number * i}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

