import React from "react";
import Skills from "./../components/skillspage/Skills";
import CustomHead from "@/components/CustomHead/CustomHead";

export default function skillsPage() {
  return (
    <>
      <CustomHead title={"Skills | Rishi Gupta"} />
      <Skills />
    </>
  );
}
