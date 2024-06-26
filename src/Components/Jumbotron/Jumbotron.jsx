import React, { Fragment } from "react";
import Header from "./Header";
import gambar from "../../../public/img/img.jpg";

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
              src={gambar}
              alt="Your Photo"
            />
          </div>
          {/* Deskripsi */}
          <div className="lg:w-1/2">
            <h3 className="text-white text-lg text-center font-bold mb-3">
              Tentang Saya
            </h3>
            <p className="text-gray-300 md:text-lg text-sm text-justify">
              Saya Agil Jibrin, seorang yang terampil dalam pemrograman web dan
              konfigurasi jaringan MikroTik. Dengan dedikasi dan keahlian saya,
              saya mampu menciptakan situs web yang menarik dan fungsional,
              serta mengelola jaringan dengan efisiensi dan keamanan yang
              tinggi. Saya percaya bahwa dengan terus mengasah kemampuan dan
              berinovasi, saya dapat memberikan kontribusi yang berarti dalam
              dunia teknologi informasi.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
