import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const [currentTrait, setCurrentTrait] = useState("Trait");
  const [nextTrait, setNextTrait] = useState("Trait2");

  let currentTraitRef = useRef();
  let nextTraitRef = useRef();

  // const handleNavigationChange = (event) => {
  //   console.log(event);
  // };

  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Location changed!", location.pathname);
  // }, [location]);

  // useEffect(() => {
  //   window.addEventListener("popstate", handleNavigationChange);

  //   return () => {
  //     window.removeEventListener("popstate", handleNavigationChange);
  //   };
  // }, []);

  const runTraitAnimation = () => {
    const moveUpTransformCurrent = [
      { transform: "translate(0, -30px)", offset: 0 },
      { transform: "translate(30px, -30px)", offset: 0.5 },
      { transform: "translate(30px, -30px)" },
      { transform: "translate(30px, 30px)" },
      { transform: "translate(0px, 30px)", offset: 1 },
    ];
    const moveUpTransformNext = [{ transform: "translateY(-30px)" }];

    const moveUpOptions = {
      duration: 200,
      iterations: 1,
      fill: "forwards",
    };

    currentTraitRef.current.animate(moveUpTransformCurrent, {
      ...moveUpOptions,
      duration: 400,
    });
    nextTraitRef.current.animate(moveUpTransformNext, moveUpOptions);

    setTimeout(() => {
      // flip vals
      // setCurrentTrait(nextTrait);
      // setNextTrait("Trait3");

      // flip refs
      let temp = currentTraitRef.current;
      currentTraitRef.current = nextTraitRef.current;
      nextTraitRef.current = temp;
    }, 1000);
  };

  return (
    <div
      className="h-screen w-screen items-center justify-center overflow-hidden grid grid-cols-4"
      style={{ backgroundColor: "#95a5a6" }}
    >
      <div className="col-span-4 h-full p-5 lg:col-span-3 lg:p-20">
        <div className="bg-white rounded-md w-full h-full big-box p-6 flex flex-col">
          <div className="text-5xl opacity-60 font-thin">Hello</div>
          <div className="text-7xl lg:text-9xl bold name-tag">
            I'm Karan<span className="dot">.</span>
          </div>

          <div className="trait-container" onClick={runTraitAnimation}>
            <div ref={currentTraitRef}>{currentTrait}</div>
            <div ref={nextTraitRef}>{nextTrait}</div>
          </div>

          <div className="flex-grow"></div>
          <div className="mt-auto">I code and solve problems.</div>
        </div>
      </div>
      {/* <div className="col-span-4 lg:col-span-1 h-full flex flex-col justify-center items-center">
        <div>Home</div>
        <div>Home</div>
        <div>
          <button onClick={() => navigate("/about")}>Data</button>
        </div>
        <div>Home</div>
        <div>Home</div>
      </div> */}
    </div>
  );
};

export default App;
