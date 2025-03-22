import ExternalLink from "@/components/ExternalLink";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karan Nehra</title>
      </Head>
      <h2 className="font-mono font-semibold text-xl">Hello! I am Karan.</h2>
      <br />
      <p className="font-mono font-light">
        An Engineer, Coder and Problem Solver. I love to learn new things,
        tinker with stuff and just expand my horizons in any way I can.
      </p>
      <br />
      <p className="font-mono font-light">
        I currently work with{" "}
        <ExternalLink href="https://celigo.com">Celigo</ExternalLink> as a{" "}
        <span className="font-semibold">Senior Backend Engineer II</span>. My
        work involves building and dealing with large-scale distriubted systems.
        I frequently write technical specs for new features and large systems,
        while also being involved in bug fixing and other product enhancement
        work. I am also a big advocate for developer producivity trying to bring
        process improvements across the board.
      </p>
      <br />
      <p className="font-mono font-light">
        Although I have been primarily working with the Mongo/Express/React/Node
        stack for a majority of my career, I would consider myself a{" "}
        <span className="font-semibold">Framework Agnostic Engineer</span>. I
        have dabbled with Django/Python, Ruby on Rails, Golang and some Rust
        too, in addition to countless number of Javascript Frameworks.
      </p>
      <br />
      <p className="font-mono font-light">
        Find me on{" "}
        <ExternalLink href="https://www.linkedin.com/in/karanehra/">
          LinkedIn
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://leetcode.com/u/karanehra/">
          LeetCode
        </ExternalLink>
      </p>
    </>
  );
}
