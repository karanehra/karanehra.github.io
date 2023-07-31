import { useParams } from "react-router-dom";
import Layout from "./components/Layout";
import DevLog0 from "./devlogs/devlog0";
import Divider from "./components/Divider";

const DevlogsLanding = () => {
  return (
    <Layout>
      <h1 className="font-black text-primary text-3xl mb-3 md:text-8xl md:mb-5">
        DevLogs
      </h1>
      <p className="text-md text-primary ">
        I have started writing dev logs/blogs just for fun to see where it takes
        me in terms of learning and knowledge
      </p>

      <Divider />

      <ol className="list-inside list-disc">
        <li className="text-primary text-sm">
          {/* <a href="/devlogs/0" className="underline"> */}
          Making my homeserver accessible over the internet
          {/* </a> */}
        </li>
      </ol>
    </Layout>
  );
};

const DevLogs = () => {
  const { id } = useParams();

  const renderDevlog = () => {
    switch (id) {
      case "0":
        return <DevLog0 />;
      default:
        return <DevlogsLanding />;
    }
  };

  if (id) {
    return renderDevlog();
  }

  return <DevlogsLanding />;
};

export default DevLogs;
