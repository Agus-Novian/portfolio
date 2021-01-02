import React from 'react';
import Typical from 'react-typical';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
import Background from './Background';
import content from '../content';

const Header = () => {
  return (
    <div className="h-screen" id="myhome">
      <div className="absolute w-full">
        <Background />
      </div>
      <div className="flex item-center justify-center md:flex md:items-center md:justify-center">
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-center">
          <div className="w-1/2 mt-16 md:w-2/5 md:mt-10 z-0">
            {/* <img className="w-full mx-auto rounded-3xl object-cover transition ease-in duration-700 transform hover:scale-105 hover:shadow-2xl opacity-70" src={content.header.img} alt="profile"/> */}
            <div className="w-full mx-auto transition ease-in duration-700 transform hover:scale-105 hover:shadow-2xl opacity-70">
              <LazyLoadImage
                className="rounded-3xl object-cover"
                src={content.header.img}
                alt="profile"
                effect="blur"
              />
            </div>
          </div>
          <div className="w-full pt-3 md:w-3/5 text-center md:text-left opacity-70">
            <h2 className="text-1xl md:text-3xl text-white font-bold transform">
              HI, My name
            </h2>
            <h2 className="text-2xl md:text-6xl text-white font-bold transform">
              Agus Novian
            </h2>
            <h1 className="text-2xl md:text-4xl md:pt-7 text-gray-400 transform">
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className="inline-block"
                wrapper="p"
              />
            </h1>
            <ScrollLink to="myproject" smooth={true} offset={-70}>
              <button className="animate-bounce bg-indigo-500 px-6 py-2 text-sm md:px-10 md:py-3 md:text-lg uppercase text-white rounded-xl mt-10 hover:bg-indigo-600 focus:outline-none">
                {content.header.btnText}
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;