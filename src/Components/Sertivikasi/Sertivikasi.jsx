import React, { useState } from "react";
import Cards from "./Cards";
import Layout from "./Layout";

const Sertivikasi = () => {
  const initialDisplayCount = 3; // Jumlah kartu yang ditampilkan awalnya
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      src: "img/serti/01_redhat.jpg",
      judul: "Redhat",
      body: "Sertivikasi Pelatihan Redhat",
      link: "https://drive.google.com/file/d/1YDEclMPZnMExu4qppNjsc9ZwNnl9cTLG/view?usp=sharinghttps://drive.google.com/file/d/1YDEclMPZnMExu4qppNjsc9ZwNnl9cTLG/view?usp=sharing",
    },
    {
      src: "img/serti/02_mtcna.jpg",
      judul: "MTCNA",
      body: "Sertivikasi Pelatihan Mikrotik",
      link: "https://drive.google.com/file/d/10vU49WDFlAw0ncXMEVK5qWYrG1HJMuCw/view?usp=sharing",
    },
    {
      src: "img/serti/03_digitalent.jpg",
      judul: "Digitalent JNA",
      body: "Sertivikasi Pelatihan Digitalent",
      link: "https://drive.google.com/file/d/15oYAjAKIdt8gkZhHpbJYnX6zkNYsfTtF/view?usp=sharing",
    },
    {
      src: "img/serti/04_aws.jpg",
      judul: "Pelatihan Dasar AWS",
      body: "Sertivikat Pelatihan Dicoding Dasar AWS",
      link: "https://instagram.com/agil.core",
    },
    {
      src: "img/serti2.jpg",
      judul: "Javascipt",
      body: "Sertivikat Pelatihan Javascript",
      link: "https://instagram.com/agil.core",
    },
    {
      src: "img/serti3.jpg",
      judul: "Javascipt Dicoding",
      body: "Sertivikat Pelatihan Javascript",
      link: "https://instagram.com/agil.core",
    },
  ];

  const handleViewMore = () => {
    setShowMore(true); // Menampilkan tombol "Kembali"
    setDisplayCount(displayCount + 3); // Menambah 3 ke jumlah kartu yang ditampilkan
  };

  const handleGoBack = () => {
    setShowMore(false); // Menyembunyikan tombol "Kembali"
    setDisplayCount(initialDisplayCount); // Mengembalikan jumlah kartu yang ditampilkan ke jumlah awal
  };

  return (
    <>
      <Layout>
        <h3 className="text-white text-lg text-center font-bold mb-3 pt-10">
          Sertivikasi
        </h3>
        <p className="text-gray-300 md:text-lg text-sm text-justify">
          Saya memiliki sertifikasi kompetensi yang menegaskan kemampuan dan
          pengetahuan saya dalam bidang tertentu. Sertifikasi ini merupakan
          bukti tanggung jawab saya terhadap pengembangan diri dan kualitas
          kerja, serta menunjukkan dedikasi saya untuk meningkatkan keterampilan
          dalam karier saya.
        </p>

        <div className="flex flex-wrap mx-4">
          {data.slice(0, displayCount).map((item, index) => (
            <Cards
              key={index}
              src={item.src}
              judul={item.judul}
              body={item.body}
              link={item.link}
            />
          ))}
        </div>
        {!showMore && (
          <button
            className="border border-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
            onClick={handleViewMore}
          >
            Lihat Lainnya
          </button>
        )}
        {showMore && (
          <button
            className="border border-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
            onClick={handleGoBack}
          >
            Sembunyikan
          </button>
        )}
      </Layout>
    </>
  );
};

export default Sertivikasi;
