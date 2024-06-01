import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const {
    src = "img/marsha.jpg",
    judul = "undefined",
    body = "lorem ipsum",
    link = "https://instagram.com/agil.core",
  } = props;

  return (
    <div className="w-full md:w-1/3 px-4 md:my-0 my-2 ">
      <div className="shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        <div className="">
          <div className="text-center md:text-lg text-sm text-gray-300 ">
            <img
              src={src}
              alt="serti"
              className="rounded-t-lg object-cover h-64 w-full hover:grayscale"
            />
          </div>{" "}
          {/* Menampilkan ikon */}
          <h2 className="text-center font-semibold text-gray-300 md:text-lg text-sm mt-2">
            {judul}
          </h2>
          <p className=" text-center text-gray-300 md:text-lg text-sm mt-2">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
