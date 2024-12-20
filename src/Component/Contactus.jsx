import React from "react";

const Contact = () => {
  return (
    <>
     <h2 className=" text-4xl font-bold text-center">Contact <span className="text-blue-500">Us</span></h2>
    <div className="flex flex-col md:flex-row justify-between items-center p-8 ">
      {/* Texte principal */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mt-2">Easy to contact us</h3>
        <p className="text-gray-600 mt-4">
          We are always ready to help by providing the best services for you. We
          believe a good place to live can make your life better.
        </p>
        {/* Options de contact */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded-lg text-center hover:shadow-lg transition">
            <p className="text-blue-500 text-lg font-bold">Call</p>
            <p className="text-gray-500">021 123 145 14</p>
            <button className="mt-2 text-white bg-blue-500 py-1 px-4 rounded">
              Call now
            </button>
          </div>
          <div className="border p-4 rounded-lg text-center hover:shadow-lg transition">
            <p className="text-blue-500 text-lg font-bold">Chat</p>
            <p className="text-gray-500">021 123 145 14</p>
            <button className="mt-2 text-white bg-blue-500 py-1 px-4 rounded">
              Chat now
            </button>
          </div>
          
          <div className="border p-4 rounded-lg text-center hover:shadow-lg transition">
            <p className="text-blue-500 text-lg font-bold">Message</p>
            <p className="text-gray-500">021 123 145 14</p>
            <button className="mt-2 text-white bg-blue-500 py-1 px-4 rounded">
              Message now
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Modern house"
          className="rounded-lg"
        />
      </div>
    </div>
    </>
  );
};

export default Contact;
