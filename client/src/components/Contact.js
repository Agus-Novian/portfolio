import React from 'react';
import content from '../content';

const Contact = () => {
  return (
    <div className=" mx-10 my-6 md:mx-10" id="mycontact">
      <div className="flex mx-3 my-3 py-3 md:mx-6 md:my-6 bg-white rounded-2xl flex-col md:flex md:flex-row">
        <div className="flex-1">
          <style dangerouslySetInnerHTML={{ __html: "\n  .icon::after{\n  content: '';\n  display: block;\n  position: absolute;\n  border-top: 23px solid transparent;\n  border-bottom: 17px solid transparent;\n  border-left: 12px solid #3182ce;\n  left: 100%;\n  top: 0;\n}\n  " }} />
          <form action="" className="form p-6 relative">
            <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style={{ left: '-40px' }}>
              <i className="fa fa-phone-volume fa-fw text-2xl transform -rotate-45" />
            </div>
            <h3 className="text-2xl text-center text-gray-900 font-semibold">Send A Message</h3>
            <p className="text-gray-600 text-center">Please fill out the form below</p>
            <div className="flex space-x-5 mt-3">
              <input type="text" name="firstname" id="firstname" placeholder="First Name" className="border p-2  w-1/2" />
              <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="border p-2 w-1/2" />
            </div>
            <input type="text" name="subject" id="subject" placeholder="Your Subject" className="border p-2 w-full mt-3" />
            <input type="email" name="email" id="email" placeholder="Your Email" className="border p-2 w-full mt-3" />
            <textarea name="message" id="message" cols={10} rows={3} placeholder="Tell us about desired property" className="border p-2 mt-3 w-full" defaultValue={""} />
            <div className="text-center">
              <button type="submit" defaultValue="Submit" className="mt-6 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2">Send Message</button>
            </div>
          </form>
        </div>
        <div className="flex-1 mx-6 mx-6 border-gray-700 border-t md:border-none">
          <h3 className="text-2xl my-4 text-center text-gray-900 font-semibold">Contact me</h3>
          <div className="flex gap-2 my-10 md:gap-5 md:mt-10 justify-center md:justify-center">
            {content.contact.links.map((link, index) => {
              return (
                <a key={index} href={link.to} className={`${index % 2 !== 0 ? 'bounceOrig' : 'bounceNew'} transition ease-in-out duration-700`} target="blank">
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d={link.svg_icon} />
                  </svg>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;