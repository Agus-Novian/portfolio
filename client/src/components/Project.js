import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';

const perPage = 3;
let arrayProjects = [];

const Project = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const sliceProject = content.project.githubs.slice(start, end);
    arrayProjects = [...arrayProjects, ...sliceProject];
    setProjects(arrayProjects);
  }

  useEffect(() => {
    // getProject();
    setLoading(true);
    try {
      loopWithSlice(0, perPage);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const handleShowMore = () => {
    loopWithSlice(next, next + perPage);
    setNext(next + perPage);
  }

  return (
    <div className="" id="myproject">

      {/* component */}
      <div className="container my-6 mx-auto px-4 md:px-12">
        <h2 className="text-2xl text-center text-gray-900 font-semibold my-6">My Project</h2>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            loading ? <div>Loading.....</div> :

              projects.map((github, index) => {
                return (
                  <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                      <a href={github.repo}>
                        <div className="transition ease-in duration-700 transform hover:scale-105">
                          <LazyLoadImage
                            src={`https://picsum.photos/600/400/?blur=1&random=${index}`}
                            effect="blur"
                            alt="Placeholder"
                          />
                        </div>
                      </a>
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                          <a className="no-underline hover:underline text-black" href={github.repo}>
                            {github.title}
                          </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                          {github.create}
                        </p>
                      </header>
                      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href={content.profile.github}>
                          {/* <img alt="Placeholder" className="block rounded-full h-8 w-8" src={content.profile.img} /> */}
                          <LazyLoadImage className="block rounded-full h-8 w-8" effect="blur" src={content.profile.img} alt="profile" />
                          <p className="ml-2 text-sm">
                            {github.author}
                          </p>
                        </a>
                        <span className="no-underline text-grey-darker hover:text-red-dark">
                          {github.status === 'public' ? <i className="fa fa-lock-open" /> : <i className="fa fa-lock" />}
                        </span>
                      </footer>
                    </article>
                  </div>
                )
              })
          }
        </div>
        <div className="flex justify-center items-center h-full mx-auto my-6 md:my-8">
          <button className="focus:outline-none hover:text-indigo-600 hover:shadow-2xl" onClick={handleShowMore}>
            <svg className="animate-bounce w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Project;