import React from "react";
import picture1 from "../assets/picture1.jpeg";
import picture2 from "../assets/picture2.jpeg";
import picture3 from "../assets/picture3.jpeg";
import picture4 from "../assets/picture4.jpeg";
import Member from "./Member";

function About() {
  return (
    <div className="py-20 px-10 flex flex-col gap-10 bg-zinc-200">
      <h1 className="text-center  text-xl font-semibold">Meet with our team</h1>
      <div className="flex gap-5 justify-center flex-wrap">
        <Member name="Thora Gill" img={picture4} profession="CEO" />
        <Member name="Chandler Hicks" img={picture1} profession="Director" />
        <Member name="Randolph Berry" img={picture2} profession="Designer" />
        <Member name="Olivia Daniels" img={picture3} profession="Manager" />
      </div>
    </div>
  );
}

export default About;
