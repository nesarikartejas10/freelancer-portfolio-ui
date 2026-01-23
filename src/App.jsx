import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <main className="font-lato text-gray-800 leading-normal">
      <Navbar />
      <Hero />
      <Portfolio />
    </main>
  );
}

export default App;
