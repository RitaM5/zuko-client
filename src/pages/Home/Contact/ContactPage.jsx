import React from 'react';
import Fade from 'react-reveal/Fade';
const ContactPage = () => {
    return (
        <div
        name="contact"
        className="w-full p-4"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 mt-12 text-center">
            <p className="text-3xl font-semibold inline border-b-4">
              CONTACT
            </p>
            <p className="py-6 text-lg">Submit the form below to get in touch with me</p>
          </div>
          <Fade top duration={4000}>
            <div className=" flex justify-center items-center">
              <form
                className=" flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-4 border-teal-600 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  name="from_email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-4 rounded-md border-teal-600 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-4 border-teal-600 rounded-md focus:outline-none"
                ></textarea>
                <input type="submit" value="Send" className="text-white bg-teal-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" />
              </form>
            </div>
          </Fade>
        </div>
      </div>
    );
};

export default ContactPage;