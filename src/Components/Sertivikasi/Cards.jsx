import React from "react";
import { Card } from "flowbite-react";

const Cards = (props) => {
  const {
    src = "img/marsha.jpg",
    judul = "undefined",
    body = "lorem ipsum",
  } = props;

  return (
    <>
      <Card className="max-w-sm">
        <img
          className="object-cover w-full h-48 rounded-t-lg"
          src={src}
          alt="Gambar Sertivikat"
        />
        <div className="p-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {judul}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
        </div>
      </Card>
    </>
  );
};

export default Cards;
