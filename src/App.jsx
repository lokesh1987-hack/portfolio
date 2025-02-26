import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import profilePic from "../assets/liladhar_image.jpg";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Liladhar Harode</title>
        <meta
          name="description"
          content="Liladhar Harode - Frontend Web Developer crafting seamless user experiences with modern web technologies."
        />
        <meta
          name="keywords"
          content="Liladhar Harode, liladhar, lokesh, Lokesh Harode, harode"
        />
        <meta property="og:title" content="Liladhar Harode portfolio" />
        <meta
          property="og:description"
          content="A portfolio showcasing my web development skills."
        />
        <meta property="og:image" content="https://liladhar.in/assets/liladhar_image-C1Bhaepi.jpg" />
        <meta property="og:url" content="https://liladhar.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-3xl text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          {/* <Navbar /> */}
          <Navbar />
          <Hero />
          <Technologies />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
};
export default App;
