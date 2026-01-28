import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-secondary text-white py-16 text-center font-montserrat">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between gap-8">
          <div className="flex-1 min-w-75 px-4">
            <h4 className="text-2xl font-bold uppercase mb-5">Location</h4>
            <p className="text-xl leading-relaxed">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="flex-1 min-w-75 px-4">
            <h4 className="text-2xl font-bold uppercase mb-5">
              Around the Web
            </h4>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full text-xl hover:bg-white hover:text-secondary transition duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full text-xl hover:bg-white hover:text-secondary transition duration-300"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full text-xl hover:bg-white hover:text-secondary transition duration-300"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full text-xl hover:bg-white hover:text-secondary transition duration-300"
              >
                <i className="fa-brands fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-75 px-4">
            <h4 className="text-2xl font-bold uppercase mb-5">
              About Freelancer
            </h4>
            <p className="text-xl leading-relaxed">
              Freelance is a free to use, MIT licensed theme created by
              <a
                href="http://startbootstrap.com"
                className="text-primary hover:text-[#15967d] transition duration-300"
              >
                Start Bootstrap
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-dark py-5 text-center">
        <p className="text-white text-sm">Copyright &copy; Your Website 2025</p>
      </div>
    </>
  );
};

export default Footer;
