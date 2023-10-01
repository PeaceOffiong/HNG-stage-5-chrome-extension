import { Navbar, LandingSc, Features, Instrcts, Footer } from "../components";

const Home = () => {
  return (
    <main className="w-full h-full ">
      <section className="h-full md:h-screen customScreen">
        <Navbar />
        <LandingSc />
      </section>
      <section>
        <div className="h-12 w-full blank"></div>
        <Features />
        <div className="h-12 w-full blank"></div>
      </section>
      <section>
        <Instrcts />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
