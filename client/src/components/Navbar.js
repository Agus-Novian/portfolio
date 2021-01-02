import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    // <nav className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-gray-800 flex-none flex">
    <nav className="bg-gray-800 sticky top-0 z-10 lg:z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ScrollLink
                to="myhome"
                smooth={true}
                offset={-70}
                className="cursor-pointer"
              >
                <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </ScrollLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {content.nav.links.map((link, index) => {
                  return (
                    <ScrollLink
                      activeClass="bg-gray-900 text-white"
                      key={index}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      {link.text}
                    </ScrollLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: bell */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {/*
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink
                activeClass="bg-gray-900 text-white"
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-375}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {link.text}
              </ScrollLink>
            );
          })}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={content.profile.img} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">{`${content.profile.first_name} ${content.profile.last_name}`}</div>
              <div className="text-sm font-medium leading-none text-gray-400">{content.profile.email}</div>
            </div>
            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* Heroicon name: bell */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* progress bar */}
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        >
        </div>
      </div>
    </nav>

  );
};

export default Navbar;