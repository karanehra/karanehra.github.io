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
      <h1 className="text-8xl font-black text-primary mb-5">Hello!</h1>
      <h1 className="text-9xl font-black text-primary mb-10">
        I'm <span className="bg-primary text-secondary px-10">Karan</span>.
      </h1>
      <div className="grow">
        <span
          className="text-7xl font-black bg-primary text-secondary mb-5 px-4"
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
