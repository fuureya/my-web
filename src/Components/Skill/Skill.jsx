import React from "react";

const SkillCard = ({ skill }) => {
  // Icon sesuai dengan judul keterampilan
  let icon;
  switch (skill.title.toLowerCase()) {
    case "programming":
      icon = <i className="fa-solid fa-code md:text-5xl text-4xl"></i>;
      break;
    case "web design":
      icon = <i className="fa-brands fa-wordpress md:text-5xl text-4xl"></i>;
      break;
    case "network configuration":
      icon = <i className="fa-solid fa-server md:text-5xl text-4xl"></i>;
      break;
    default:
      icon = <i className="fas fa-code md:text-5xl text-4xl"></i>; // default icon jika tidak cocok
  }

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        <div className="p-4 pt-16">
          <div className="text-center md:text-lg text-sm text-gray-300 ">
            {icon}
          </div>{" "}
          {/* Menampilkan ikon */}
          <h2 className="text-center font-semibold text-gray-300 md:text-lg text-sm mt-2">
            {skill.title}
          </h2>
          <p className=" text-center text-gray-300 md:text-lg text-sm mt-2">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  const skills = [
    {
      title: "Programming",
      description: "Mahir di JavaScript, PHP, Laravel",
    },
    {
      title: "Web Design",
      description: "Mahir Menggunakan Wordpress & Page Builder",
    },
    {
      title: "Network Configuration",
      description: "Mahir menggunakan Router Mikrotik",
    },
  ];

  return (
    <div className="bg-neutral-950 md:py-10  lg:px-10 px-6">
      <h3 className="text-white text-lg text-center font-bold mb-3">
        Keahlian
      </h3>
      <p className="text-gray-300 md:text-lg text-sm text-justify">
        Saya memiliki keahlian yang kuat di bidang web programming, dengan
        pengalaman mendalam dalam pengembangan aplikasi web menggunakan berbagai
        teknologi seperti HTML, CSS, JavaScript, dan kerangka kerja seperti
        Laravel. Selain itu, saya juga memiliki pengetahuan yang solid dalam
        jaringan komputer, termasuk konfigurasi jaringan Mikrotik.
      </p>
      <div className="flex flex-wrap mx-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
