import React from 'react';

const Resume = () => {
  return (
    <div className="mx-10 md:mx-10 md:my-9" id="myresume">
      <div className="mx-3 my-3 py-3 md:mx-6 md:my-6 bg-white rounded-2xl">
        <h2 className="text-2xl text-center text-gray-900 font-semibold my-6">My Resume</h2>
        {/* component */}
        <div className="relative w-1/2 m-8">
          <div className="border-r-2 border-blue-500 absolute h-full top-0" style={{ left: '15px' }} />
          <ul className="list-none m-0 p-0">
            <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-indigo-500 rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Oct 2019 - Freelance Developer</div>
              </div>
              <div className="ml-12">
                Website Developer
            </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-blue-500 rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Jan 2020 - IT Support</div>
              </div>
              <div className="ml-12">
                PT. Multi Makmur Indonesia
            </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-indigo-500 rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Apr 2020 - Junior Software Engineer</div>
              </div>
              <div className="ml-12">
                PT. Multi Makmur Indonesia
            </div>
            </li>
            {/* <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">---</div>
              </div>
              <div className="ml-12">
                ---
            </div>
            </li> */}
          </ul>
        </div>
        <div className="relative m-8 flex items-center mb-1">
          <div className="bg-green-500 rounded-full h-8 w-8" />
          <div className="flex-1 ml-4 font-medium">---</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;