function Navbar() {
  return (
    <nav className="w-full bg-secondary py-5 fixed z-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a
          href="#home"
          className="text-white text-2xl font-montserrat font-bold"
        >
          START BOOTSTRAP
        </a>
        <ul className="hidden lg:flex ml-5">
          <li>
            <a
              href="#portfolio"
              className="text-white font-montserrat font-bold px-4 py-5 rounded hover:text-primary transition duration-300"
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white font-montserrat font-bold px-4 py-5 rounded hover:text-primary transition duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white font-montserrat font-bold px-4 py-5 rounded hover:text-primary transition duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>

        <button className="lg:hidden flex items-center gap-2 text-white bg-primary px-3 py-2 rounded text-lg">
          Menu
          <i className="fa-solid fa-bars pt-1"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
