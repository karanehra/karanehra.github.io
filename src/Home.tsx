import { useState } from "react";
import Layout from "./components/Layout";

const Home = () => {
  const traits = [
    "Software Engineer",
    "Coder",
    "Tinkerer",
    "Gamer",
    "Audodiact",
  ];
  const [activeTrait, setActiveTrait] = useState(0);

  return (
    <Layout>
      <h1 className="font-black text-primary text-3xl mb-3 md:text-8xl md:mb-5">
        Hello!
      </h1>
      <h1 className="font-black text-primary text-6xl mb-4 md:text-9xl md:mb-10">
        I'm <span className="bg-primary text-secondary md:px-10">Karan</span>.
      </h1>
      <div className="grow">
        <span
          className="font-black bg-primary text-secondary text-3xl md:mb-5 md:px-4 md:text-7xl"
          onClick={() => setActiveTrait((activeTrait + 1) % 5)}
        >
          {traits[activeTrait]}
        </span>
      </div>

      <div className="text-primary text-lg">
        Find <span className="bg-primary text-secondary px-4">karanehra</span>{" "}
        on socials
      </div>
    </Layout>
  );
};

export default Home;
