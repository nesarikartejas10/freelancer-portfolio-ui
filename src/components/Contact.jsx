const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl text-secondary mb-5">
          CONTACT ME
        </h2>
        <div className="flex justify-center items-center my-5">
          <div className="w-26 h-1 bg-secondary rounded-full"></div>
          <div className="mx-4 text-3xl text-secondary">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-26 h-1 bg-secondary rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-left">
          <form id="contactForm" className="px-4">
            <div className="relative mb-8">
              <label
                for="name"
                className="absolute -top-1.25 text-gray-600 text-xl transition-all duration-300 pointer-events-none"
              >
                Full name
              </label>
              <input
                className="w-full py-5 border-b-2 border-gray-300 outline-none focus:border-primary transition duration-300"
                id="name"
                type="text"
                placeholder=" "
                required
              />
            </div>

            <div className="relative mb-8">
              <label
                for="email"
                className="absolute -top-1.25 text-gray-600 text-xl transition-all duration-300 pointer-events-none"
              >
                Email address
              </label>
              <input
                className="w-full py-5 border-b-2 border-gray-300 outline-none focus:border-primary transition duration-300"
                id="email"
                type="email"
                placeholder=" "
                required
              />
            </div>

            <div className="relative mb-8">
              <label
                for="phone"
                className="absolute -top-1.25 text-gray-600 text-xl transition-all duration-300 pointer-events-none"
              >
                Phone number
              </label>
              <input
                className="w-full py-5 border-b-2 border-gray-300 outline-none focus:border-primary transition duration-300"
                id="phone"
                type="tel"
                placeholder=" "
              />
            </div>

            <div className="relative mb-8">
              <label
                for="message"
                className="absolute -top-1.25 text-gray-600 text-xl transition-all duration-300 pointer-events-none"
              >
                Message
              </label>
              <textarea
                className="w-full py-5 border-b-2 border-gray-300 outline-none focus:border-primary transition duration-300 min-h-37.5 resize-y"
                id="message"
                placeholder=" "
                required
              ></textarea>
            </div>

            <button className="bg-primary text-white px-8 py-5 rounded-lg text-lg font-medium hover:bg-[#15967d] transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
