import Footer from "../Components/Footer/Footer";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Navbar from "../Components/Navbar/Navbar";
import Sertivikasi from "../Components/Sertivikasi/Sertivikasi";
import Skill from "../Components/Skill/Skill";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Skill />
      <Sertivikasi />
      <Footer />
    </>
  );
};

export default Homepage;
