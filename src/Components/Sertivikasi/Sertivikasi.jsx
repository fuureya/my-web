import Cards from "./Cards";
import Layout from "./Layout";

const Sertivikasi = () => {
  const data = [
    {
      src: "img/serti1.jpg",
      judul: "MYSQL",
      body: "Sertivikat Pelatihan MYSQL",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Cards
              key={index}
              src={item.src}
              judul={item.judul}
              body={item.body}
              link={item.link}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Sertivikasi;
