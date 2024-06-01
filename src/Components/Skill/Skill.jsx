import React from "react";

const SkillCard = ({ skill }) => {
  // Icon sesuai dengan judul keterampilan
  let icon;
  switch (skill.title.toLowerCase()) {
    case "programming":
      icon = <i className="fab fa-code"></i>; // menggunakan kelas untuk ikon Font Awesome
      break;
    case "design":
      icon = <i className="fab fa-paint-brush"></i>;
      break;
    case "communication":
      icon = <i className="fas fa-comments"></i>;
      break;
    default:
      icon = <i className="fas fa-code"></i>; // default icon jika tidak cocok
  }

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="text-center md:text-lg text-sm text-gray-300">
            {icon}
          </div>{" "}
          {/* Menampilkan ikon */}
          <h2 className="font-semibold text-gray-300 md:text-lg text-sm mt-2">
            {skill.title}
          </h2>
          <p className="text-gray-300 md:text-lg text-sm mt-2">
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
      description: "Expert in JavaScript, Python, and Java.",
    },
    {
      title: "Design",
      description: "Proficient in Adobe Photoshop and Illustrator.",
    },
    {
      title: "Communication",
      description: "Excellent verbal and written communication skills.",
    },
  ];

  return (
    <div className="container bg-neutral-950 md:py-10  lg:px-10 px-6">
      <span className="text-white text-lg font-bold">Keahlian</span>
      <p className="text-gray-300 md:text-lg text-sm text-justify">
        Saya memiliki keahlian yang kuat di bidang web programming, dengan
        pengalaman mendalam dalam pengembangan aplikasi web menggunakan berbagai
        teknologi seperti HTML, CSS, JavaScript, dan kerangka kerja seperti
        Laravel. Selain itu, saya juga memiliki pengetahuan yang solid dalam
        jaringan komputer, termasuk konfigurasi jaringan Mikrotik.
      </p>
      <div className="flex flex-wrap -mx-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
