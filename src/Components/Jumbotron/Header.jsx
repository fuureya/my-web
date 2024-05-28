const Header = () => {
  return (
    <div className="bg-neutral-950">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-6 px-6">
        {/* Bagian Kiri */}
        <div className="lg:w-1/2">
          <div className="text-white">
            <div className="ml-4">
              <p className="text-neutral-500">About Me</p>
            </div>
          </div>
        </div>
        {/* Bagian Kanan */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center ">
          <div className="text-white flex items-center">
            {/* Ikon Media Sosial */}
            <a
              href="https://web.facebook.com/profile.php?id=100079770827303"
              className="text-white mr-4 hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mr-4 hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Info */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
