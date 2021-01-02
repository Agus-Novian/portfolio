import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import profile from '../content/profile.jpg';

const About = () => {
  return (
    <div className="mx-10 md:mx-10 md:my-9" id="myabout">
      <div className="h-screen flex mx-3 my-3 py-3 md:mx-6 md:my-6 items-center md:items-center bg-white rounded-2xl flex-col md:flex md:flex-row">
        <div className="flex-1 mx-6 md:mx-6">
          {/* <img src={profile} className="rounded-full w-2/5 mx-auto md:w-2/5 shadow-2xl opacity-90 transition ease-in duration-700 transform hover:scale-105" alt="profile" /> */}
          <div className="overflow-hidden w-2/5 mx-auto md:w-2/5 transition ease-in duration-700 transform hover:scale-105">
            <LazyLoadImage
              className="rounded-full opacity-90"
              src={profile}
              effect="blur" />
          </div>
          <div className="my-4">
            <div className="w-full">
              <h2 className="m-1">PHP</h2>
              <div className="shadow w-full bg-blue-200">
                <div className="bg-blue-700 text-xs leading-none py-1 text-center text-white animate-pulse" style={{ width: '80%' }}>80%</div>
              </div>
              <h2 className="m-1">Node JS</h2>
              <div className="shadow w-full bg-blue-200">
                <div className="bg-blue-700 text-xs leading-none py-1 text-center text-white animate-pulse" style={{ width: '85%' }}>85%</div>
              </div>
              <h2 className="m-1">Django</h2>
              <div className="shadow w-full bg-blue-200">
                <div className="bg-blue-700 text-xs leading-none py-1 text-center text-white animate-pulse" style={{ width: '65%' }}>65%</div>
              </div>
              <h2 className="m-1">ReactJS</h2>
              <div className="shadow w-full bg-blue-200">
                <div className="bg-blue-700 text-xs leading-none py-1 text-center text-white animate-pulse" style={{ width: '50%' }}>50%</div>
              </div>
              <h2 className="m-1">VueJS</h2>
              <div className="shadow w-full bg-blue-200">
                <div className="bg-blue-700 text-xs leading-none py-1 text-center text-white animate-pulse" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border-gray-700 border-t md:border-none">
          <h3 className="my-2 text-2xl text-center text-gray-900 font-semibold">About Me</h3>
          <div className="mx-6 md:mx-6">
            {content.about.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;