import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
// import profile from '../content/profile.jpg';
import profile from '../content/kdf21.jpg'

const About = () => {
  const [loading, setLoading] = useState(false);
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      setLoading(false);
      setStacks(content.about.stacks);
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className='mx-10 md:mx-10 md:my-9' id='myabout'>
      <div className='h-screen flex mx-3 my-3 py-3 md:mx-6 md:my-6 items-center md:items-center bg-white rounded-2xl flex-col md:flex md:flex-row'>
        <div className='flex-1 border-gray-700 border-t md:border-none'>
          <h3 className='my-2 text-2xl text-center text-gray-900 font-semibold'>
            About Me
          </h3>
          <div className='mx-6 md:mx-6'>
            <p>{content.about.desc1}</p>
            <br />
            <p>{content.about.desc2}</p>
            <br />
            <p>{content.about.desc3}</p>
            <br />
            <p>{content.about.desc4}</p>
            <br />
            <p>{content.about.desc5}</p>
            <br />
            <br />
            <h1 className='bg-blue-600 text-2xl rounded-md px-2 py-1 inline-block font-bold text-gray-50'>
              Tech Stack
            </h1>
            <div className='flex flex-row flex-wrap mt-8'>
              {loading ? (
                <div>Loading.....</div>
              ) : (
                stacks.map((stack, index) => {
                  return (
                    <img
                      src={stack.image}
                      className='h-20 w-20 mx-4 my-4'
                      alt={stack.name}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div className='overflow-hidden w-1/3 mx-auto md:w-1/3 pr-5 transition ease-in duration-700 transform hover:scale-105'>
          <LazyLoadImage
            className='rounded-full opacity-90'
            src={profile}
            effect='blur'
            alt='kdf21'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
