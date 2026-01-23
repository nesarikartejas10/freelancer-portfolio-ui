const About = () => {
  return (
    <section id="about" className="bg-primary text-white py-24 text-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl mb-5">ABOUT</h2>
        <div className="flex justify-center items-center my-5">
          <div className="w-26 h-1 bg-white rounded-full"></div>
          <div className="mx-4 text-3xl">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-26 h-1 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-4xl mx-auto text-left">
          <p className="text-xl lg:w-[48%]">
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-xl lg:w-[48%]">
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button className="flex items-center gap-2 text-white border-2 border-white rounded-lg px-7 py-4 text-lg font-medium hover:bg-white hover:text-secondary transition duration-300">
            <i className="fa-solid fa-download"></i>
            Free Download!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
