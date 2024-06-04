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
      link: "https://drive.google.com/file/d/1qn7VxZtIqGPN8g69dKVaSWB7En_jg0RN/view?usp=sharing",
    },
    {
      src: "img/serti/05_frontend_1.jpg",
      judul: "Pelatihan Frontend",
      body: "Sertivikat Pelatihan Dicoding",
      link: "https://drive.google.com/file/d/145YFk5EPqav-u0GOu3p_DYQSSW4486bi/view?usp=sharing",
    },
    {
      src: "img/serti/06_frontend_2.jpg",
      judul: "Pelatihan Intro Web",
      body: "Sertivikat Pelatihan Dicoding",
      link: "https://drive.google.com/file/d/1lYidBBzS1wwxjDCEjE5FMcAVuwbxB54K/view?usp=sharing",
    },
    {
      src: "img/serti/07_js.jpg",
      judul: "Pelatihan Javascript",
      body: "Sertivikat Pelatihan Javascript Dicoding",
      link: "https://drive.google.com/file/d/1sxeeAwGjZlKaIjJdeppnWOFkRPEEi9A0/view?usp=sharing",
    },
    {
      src: "img/serti/08_mysql.jpg",
      judul: "Pelatihan MYSQL",
      body: "Sertivikat Pelatihan MYSQL",
      link: "https://drive.google.com/file/d/10Q4Jba58yhUs-1vT5VhmwqfEoz9Hz8Pn/view?usp=sharing",
    },
    {
      src: "img/serti/09_js.jpg",
      judul: "Pelatihan Javascript UDEMY",
      body: "Sertivikat Pelatihan MYSQL",
      link: "https://drive.google.com/file/d/1SlHqXU70bmBLsyYhxdX-dUMwkBlueBOk/view?usp=sharing",
    },
    {
      src: "img/serti/10_cp.jpg",
      judul: "Competitive Programming",
      body: "Sertivikat Partisipasi",
      link: "https://drive.google.com/file/d/1vZe7oAuFqrUNraFax3plYmajZTlG4wzL/view?usp=sharing",
    },
  ];

  const handleViewMore = () => {
    setShowMore(true); // Menampilkan tombol "Kembali"
    setDisplayCount(displayCount + 10); // Menambah 3 ke jumlah kartu yang ditampilkan
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
            className="border border-gray-300 hover:bg-gray-600 md:text-lg text-sm text-gray-300 font-bold py-2 px-4 rounded mt-4 mx-auto block"
            onClick={handleViewMore}
          >
            Lihat Lainnya
          </button>
        )}
        {showMore && (
          <button
            className="border border-gray-300 hover:bg-gray-600 md:text-lg text-sm text-gray-300 font-bold py-2 px-4 rounded mt-4 mx-auto block"
            onClick={handleGoBack}
          >
            Sembunyikan
          </button>
        )}
      </Layout>

      {/* push dulu */}
      {/* pudh lagi */}
    </>
  );
};

export default Sertivikasi;
