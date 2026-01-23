const Hero = () => {
  return (
    <section
      id="home"
      className="bg-primary text-white text-center pt-40 pb-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
          alt="Avatar"
          className="w-60 mx-auto mb-8"
        />
        <h1 className="font-montserrat font-bold text-5xl mb-5">
          START BOOTSTRAP
        </h1>
        <div className="flex justify-center items-center my-5">
          <div className="w-26 h-1 bg-white rounded"></div>
          <div className="mx-4 text-3xl">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-26 h-1 bg-white rounded"></div>
        </div>
        <p className="text-xl">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
};

export default Hero;
