import React, { Fragment } from "react";
import Header from "./Header";

const Jumbotron = () => {
  return (
    <Fragment>
      <Header />
      <div className="bg-neutral-950 py-10 lg:px-10 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Foto */}
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 lg:pr-10">
            <img
              className="h-48 w-48 lg:h-64 lg:w-64 rounded-full object-cover"
              src="public/img/img.jpg"
              alt="Your Photo"
            />
          </div>
          {/* Deskripsi */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">
              Deskripsi Singkat
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
