import Nav from "./Nav";
import Intro from "./Intro";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-black p-5 font-serif min-h-screen text-white">
      <Nav />
      <Intro />
      <Footer />
    </div>
  );
}

export default Home;
