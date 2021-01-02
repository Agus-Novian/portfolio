import React from 'react';
import {
  Navbar,
  Header,
  Project,
  Resume,
  About,
  Contact
} from './components';

const App = () => {
  return (
    <div className="antialiased bg-gray-100">
      <Navbar />
      <Header />
      <Project />
      <Resume />
      <About />
      <Contact />
      <div className="my-2 mx-10 text-center shadow-2xl rounded-md bg-white">
        <p className="font-thin">2020 &copy; Copyright <b>Agus Novian</b>. All Rights Reserved</p>
      </div>
    </div >
  );
};

export default App;