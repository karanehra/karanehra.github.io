import Badge from "./components/Badge";
import BgColorSpan from "./components/BgColorSpan";
import BgColorText from "./components/BgColorText";
import Divider from "./components/Divider";
import Layout from "./components/Layout";

const Projects = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-primary mb-4 font-black">Projects</h1>

      <p className="text-md text-primary mb-4">
        I primarily work on <BgColorSpan>Web Technologies</BgColorSpan> in the{" "}
        <BgColorSpan>Javascript Ecosystem</BgColorSpan>. But I love to explore
        new technologies, languages and frameworks. I have been exploring things
        ranging from <BgColorSpan>Game Development</BgColorSpan> and{" "}
        <BgColorSpan>WebAssembly</BgColorSpan> to{" "}
        <BgColorSpan>Web3</BgColorSpan> and{" "}
        <BgColorSpan>Smart Contracts</BgColorSpan>
      </p>

      <p className="text-md text-primary ">
        I put all my personal work on github in private and public repositories.
        Take a{" "}
        <a
          href="https://github.com/karanehra"
          rel="noopener noreferrer"
          target="_blank"
          className="underline"
        >
          look
        </a>
        ! (it's a mess of unfinished projects but a lot of exploration)
      </p>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        Asli ID Skills Backend
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="nodejs" />
        <Badge type="aws" />
        <Badge type="dynamo" />
        <Badge type="swagger" />
        <Badge type="typescript" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        Asli ID Skills App
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react-native" />
        <Badge type="typescript" />
        <Badge type="redux" />
        <Badge type="styled-c" />
        <Badge type="storybook" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        Tophatter Common
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="npm" />
        <Badge type="typescript" />
        <Badge type="rollup" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        Tophatter Mobile App
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react-native" />
        <Badge type="typescript" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Onboarding
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="mui" />
        <Badge type="redux" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Onboarding
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="mui" />
        <Badge type="redux" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Scrutiny
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="mui" />
        <Badge type="redux" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Candidate Portal
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Admin
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="redux" />
        <Badge type="mui" />
        <Badge type="chartjs" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        InstaPRL Reports
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="mongo" />
        <Badge type="aws" />
        <Badge type="python" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">Bifrost</BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="nodejs" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">VCall Vault</BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="typescript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="react-router" />
        <Badge type="redux" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">
        Rider Renewal
      </BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="typescript" />
        <Badge type="nodejs" />
        <Badge type="googlepay" />
        <Badge type="aws" />
        <Badge type="mongo" />
      </div>

      <Divider />

      <BgColorText className="text-3xl mb-4 font-bold">PASA</BgColorText>
      <div className="flex gap-1 flex-wrap">
        <Badge type="react" />
        <Badge type="javascript" />
        <Badge type="scss" />
        <Badge type="webpack" />
        <Badge type="react-router" />
        <Badge type="redux" />
        <Badge type="mui" />
      </div>

      <Divider />
    </Layout>
  );
};

export default Projects;
