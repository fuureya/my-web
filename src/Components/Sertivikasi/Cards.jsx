import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Cards = (props) => {
  const {
    src = "img/marsha.jpg",
    judul = "undefined",
    body = "lorem ipsum",
    link = "https://instagram.com/agil.core",
  } = props;

  return (
    <>
      <Link to={link}>
        <Card className="max-w-sm">
          <img
            className="object-cover w-full h-48 rounded-t-lg hover:grayscale"
            src={src}
            alt="Gambar Sertivikat"
          />
          <div className="p-4">
            <h5 className="text-gray-300 md:text-lg text-lg font-bold">
              {judul}
            </h5>
            <p className="text-gray-300 md:text-lg text-sm">{body}</p>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Cards;
