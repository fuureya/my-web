const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-6 px-6 lg:flex lg:justify-between lg:items-center">
      <div className="text-neutral-500 text-center md:text-md text-sm lg:text-left lg:ml-8">
        2024 All rights reserved
      </div>
      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
        <a href="#" className="text-white mr-4 hover:text-neutral-500">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="text-white mr-4 hover:text-gray-400">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
