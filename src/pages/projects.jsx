import CustomHead from "@/components/CustomHead/CustomHead";
import Projects from "@/components/projects/Projects";
import React from "react";

export default function projectsPage() {
  return (
    <>
      <CustomHead title={"Projects | Rishi Gupta"} />
      <Projects />
    </>
  );
}
