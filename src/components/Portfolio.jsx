const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 text-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl text-secondary mb-5">
          PORTFOLIO
        </h2>
        <div className="flex justify-center items-center my-5">
          <div className="w-26 h-1 bg-secondary rounded-full"></div>
          <div className="mx-4 text-3xl text-secondary">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-26 h-1 bg-secondary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png"
              alt="Cabin"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png"
              alt="Cake"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png"
              alt="Circus"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png"
              alt="Game"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png"
              alt="Safe"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png"
              alt="Submarine"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/90 hidden group-hover:flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-5xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
