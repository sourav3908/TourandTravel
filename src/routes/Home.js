import Destination from "../components/Destination";
// import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1667066308861-d9027981632e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
        title="Journey to your heart's content"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      /> */}
      <Title />
      <Destination />

      <Trip />
      <Footer />
    </>
  );
}

export default Home;
