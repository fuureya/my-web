import { Card } from "flowbite-react";

const Cards = (props) => {
  const {
    src = "img/img.jpg",
    judul = "undefined",
    body = "lorem ipsum",
  } = props;

  return (
    <Card className="max-w-sm" imgAlt="Gambar Sertivikat" imgSrc={src}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {judul}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
    </Card>
  );
};

export default Cards;
